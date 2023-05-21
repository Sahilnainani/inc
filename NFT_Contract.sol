// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

 
contract NFTContract is ERC721{

    struct NFT{
        string name;
        string description;
        string image;
    }

    mapping (uint256=>NFT) public nfts;
    uint256 public totalNFT;

    constructor() ERC721("Lumos","LMS"){
        totalNFT = 0;
    }
    function createNFT(string memory _name, string memory _description, string memory _image) external {
        uint256 newTokenId = totalNFT + 1;
        _safeMint(msg.sender, newTokenId);
        nfts[newTokenId] = NFT(_name, _description, _image);
        totalNFT = newTokenId;
    }

    function updateNFT(uint256 _tokenId, string memory _name, string memory _description, string memory _image) external {
        require(_exists(_tokenId), "NFT does not exist");
        require(ownerOf(_tokenId) == msg.sender, "Only owner can Update");
        nfts[_tokenId].name = _name;
        nfts[_tokenId].description = _description;
        nfts[_tokenId].image = _image;
    }

    function deleteNFT(uint256 _tokenId) external {
        require(_exists(_tokenId), "NFT does not exist");
        require(ownerOf(_tokenId) == msg.sender, "Only owner can Delete");
        delete nfts[_tokenId];
        _burn(_tokenId);
    }

    function getNFT(uint256 _tokenId) external view returns (string memory name, string memory description, string memory image) {
        require(_exists(_tokenId), "NFT does not exist");
        NFT memory nft = nfts[_tokenId];
        return (nft.name, nft.description, nft.image);
    }
}