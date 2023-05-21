const Web3 = require('web3');
const IPFS = require('ipfs-http-client');
const {Buffer} = require('buffer')
import * as dotenv from 'dotenv' 
dotenv.config()

const abi = require('../contractAbi.json');
const web3 = new Web3('')
const contractAddress = "";
const privateKey = ""
const address = '';

const contract = new web3.eth.Contract(abi, contractAddress);

const account = web3.eth.accounts.privateKeyToAccount(privateKey);
web3.eth.defaultAccount = address;

const showNFTs = async(req,resp)=>{
    try{
        resp.status(200).send("OP bOKTE")
    }
    catch(error){
        console.log("ERROR")
        resp.status(500).send(error.message)
    }
}

const createNFT=async(req,resp)=>{
    try{
        const {name,description} = req.body; // NFT name
        const image = req.files['image'][0].buffer; // Raw image data
        console.log(name,description,image);
        const nameS = JSON.stringify(name)
        const descS = JSON.stringify(description)
        const imageS = JSON.stringify(image)
        const tokenId =await contract.methods.totalNFT().call()
        console.log(tokenId)
        // const tx = await contract.methods.createNFT(nameS, descS, imageS)
        // // Estimate the gas required for the transaction
        // const gas = await contract.methods.createNFT(name, description, image).estimateGas();

        // // Build the transaction object
        // const txObject = {
        // from: account.address,
        // to: contractAddress,
        // gas: web3.utils.toHex(gas),
        // data: data,
        // };

        // // Sign the transaction with the account's private key
        // const signedTx = await web3.eth.accounts.signTransaction(txObject, privateKey);

        // // Send the signed transaction
        // const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);

        // console.log('NFT created:', receipt.transactionHash);

        console.log(tx)

        resp.send(`OP`)
    }
    catch(error){
        resp.status(500).send(error.message)
    }
}

module.exports = {
    showNFTs,
    createNFT
}
