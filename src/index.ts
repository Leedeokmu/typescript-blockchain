import * as CryptoJS from 'crypto-js';

class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    public static calculateBlockHash = (
        index: number,
        previousHash: string,
        data: string,
        timestamp: number
    ): string => CryptoJS.SHA256(index + previousHash + data + timestamp).toString();

    public static validateBlock = (block: Block): boolean =>
        typeof block.index === "number" && typeof block.hash === "string" && typeof block.previousHash === "string" && typeof block.data === "string" && typeof block.timestamp === "number";

    constructor(index: number, hash: string, previousHash: string, data: string, timestamp: number) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}

const genesisBlock = new Block(0, "123123", "", "hello", 12345);
let blockChain: Block[] = [genesisBlock];

const getBlockchain = (): Block[] => blockChain;
const getLatestBlock = (): Block => blockChain[blockChain.length - 1];
const getNewTimestamp = (): number => Math.round(new Date().getTime() / 1000);
const createNewBlock = (data: string): Block => {
    const previousBlock = getLatestBlock();
    const newIndex = previousBlock.index + 1;
    const newTimestamp = getNewTimestamp();
    const newHash = Block.calculateBlockHash(
        newIndex,
        previousBlock.hash,
        data,
        newTimestamp,
    );
    const newBlock = new Block(
        newIndex,
        newHash,
        previousBlock.hash,
        data,
        newTimestamp
    );
    return addBlock(newBlock);
}

const getHashForBlock = (block: Block): string => Block.calculateBlockHash(block.index, block.previousHash, block.data, block.timestamp);

const isBlockValid = (candidateBlock: Block, previousBloc: Block): boolean => {
    if(!Block.validateBlock(candidateBlock)){
        return false;
    } else if(previousBloc.index + 1 !== candidateBlock.index){
        return false;
    } else if(previousBloc.hash !== candidateBlock.previousHash){
        return false;
    } else if(getHashForBlock(candidateBlock) !== candidateBlock.hash{
        return false;
    } else{
        return true;
    }
}

const addBlock = (candidateBlock: Block): Block=> {
    if (isBlockValid(candidateBlock, getLatestBlock())) {
        blockChain.push(candidateBlock);
    }
    return candidateBlock;

}