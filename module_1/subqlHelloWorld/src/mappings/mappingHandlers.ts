import {SubstrateBlock, SubstrateEvent, SubstrateExtrinsic} from "@subql/types";
import {StarterEntity} from "../types";


export async function handleBlock(block: SubstrateBlock): Promise<void> {
    //Create a new starterEntity with ID using block hash
    let record = new StarterEntity(block.block.header.hash.toString());
    //Record block number
    record.blockHeight = block.block.header.number.toNumber();
    await record.save();
}

