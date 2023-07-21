// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

using Counters for Counters.Counter;
contract NFT is ERC721URIStorage{
    Counters.Counter private _tokenIDS;
    Counters.Counter private _itemsSold;
    uint256 listing_price = 0.00025 ether;
    address payable owner;

    constructor() ERC721("Metaverse tokens","METT"){
        owner= payable(msg.sender);
    }
    struct MarketItem {
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;
    }

    mapping(uint256 => MarketItem) private idToMarketItem;

    function updateListingPrice(uint _listingPrice) public payable {
        require(owner == msg.sender);
        listing_price = _listingPrice;
    }

    function getListingPrice() public view returns (uint256) {
        return listing_price;
    }

    function createToken(string memory tokenURI, uint256 price) public payable returns (uint) {
        _tokenIDS.increment();
        uint256 newTokenId = _tokenIDS.current();
        _mint(msg.sender,newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        createMarketItem(newTokenId,price);
        return newTokenId;
    }

    function _mint(address to,uint256 tokenID) internal virtual {

        require(to != address(0), "ERC721: mint to the zero address");
        require(!_exists(tokenID), "ERC721: token already minted");

        _beforeTokenTransfer(address(0),to, tokenID);

        _balances[to] +=1;
        _owners[tokenID] =to ;

        emit Transfer(address(0),to,tokenID);

        _afterTokenTransfer(address(0),to,tokenID);
        
    }

    function _setTokenURI(uint256 tokenID,string memory _tokenURI) internal virtual {

        require(_exists(tokenID), "ERC721URIStorage: URI set of nonexistent token");
        _tokenURIS[tokenID]=_tokenURI;
    }

    function createMarketItem(uint256 tokenID, uint256 price) private {
        require(price > 0, "Price must be atleast 1 wei");
        require(msg.value == listing_price);

        idToMarketItem[tokenID] = MarketItem(tokenID,payable(address(this)),price,false);

        _transfer(msg.sender, address(this) ,tokenID);

        emit MarketItemCreated( tokenID,msg.sender , address(this),price,false);    
    }

    event MarketItemCreated (
        uint256 indexed tokenID,
        address seller,
        address owner,
        uint256 price,
        bool sold
    );

    function resellToken(uint256 tokenId, uint256 price) public payable {
        require(idToMarketItem[tokenId].owner == msg.sender);
        require(msg.value ==listing_price);
        idToMarketItem[tokenId].sold = false;
        idToMarketItem[tokenId].price =price;
        idToMarketItem[tokenId].seller = payable(msg.sender);
        idToMarketItem[tokenId].owner = payable(address(this));
        _itemsSold.decrement();
        _transfer(msg.sender,address(this),tokenId);
    }

    function createMarketSale(uint256 tokenId) public payable {
        uint price = idToMarketItem[tokenId].price;
        address payable creator = idToMarketItem[tokenId].seller;
        require(msg.value==price);
        idToMarketItem[tokenId].owner = payable(msg.sender);
        idToMarketItem[tokenId].sold = true;
        idToMarketItem[tokenId].seller =payable(address(0));
        _itemsSold.increment();
        _transfer(address(this),msg.sender,tokenId);
        payable(owner).transfer(listing_price);
        payable(creator).transfer(msg.value);
    }

    function fetchMarketItems() public view returns (MarketItem[] memory){
        uint itemCount = _tokenIDS.current();
        uint unsoldItemCount = _tokenIDS.current() - _itemsSold.current();
        uint currentIndex =0 ;

        MarketItem[] memory items = new MarketItem[](unsoldItemCount);

        for (uint i=0 ; i<itemCount ; i++){
            if (idToMarketItem[i+1].owner == address(this)){
                uint currentId =i+1;
                MarketItem storage currentItem = idToMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex+=1;
            }
        }
        return items; 
    }

    function fetchMyNFTs() public view returns (MarketItem[] memory){
        uint totalItemCount= _tokenIDS.current();
        uint itemCount=0;
        uint currentIndex=0;
        for (uint i=0;i<totalItemCount;i++){
            if (idToMarketItem[i+1].owner==msg.sender){
                itemCount+=1;
            }
        }
        MarketItem[] memory items = new MarketItem[](itemCount);

        for (uint i=0;i<totalItemCount;i++){
            if (idToMarketItem[i+1].owner==msg.sender){
                uint currentId=i+1;
                MarketItem storage currentItem =idToMarketItem[currentId];
                items[currentIndex]= currentItem;
                currentIndex+=1;
            }
        }
        return items;
    }

    function fetchItemsListed() public view returns (MarketItem[] memory){
        uint totalItemCount = _tokenIDS.current();
        uint itemCount = 0 ;
        uint currentIndex = 0;

        for (uint i=0;i<totalItemCount;i++){
            if (idToMarketItem[i+1].seller == msg.sender) {
                itemCount+=1;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);
        for (uint i=0;i<totalItemCount;i++){
            if (idToMarketItem[i+1].seller == msg.sender){
                uint currentId = i+1;
                MarketItem storage currentItem =idToMarketItem[currentId];
                items[currentIndex] =currentItem;
                currentIndex+=1;
            }
        }

        return items;
    }


}

