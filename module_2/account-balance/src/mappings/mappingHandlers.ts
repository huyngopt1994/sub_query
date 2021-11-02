import {SubstrateEvent} from "@subql/types";
import {Account} from "../types";
import {Balance} from "@polkadot/types/interfaces";

export async function handleEvent(event: SubstrateEvent): Promise<void> {
    const {event: {data: [account, balance]}} = event;
    // Create a new Account Entity with ID using block hash
    let record = new Account(event.extrinsic.block.block.header.hash.toString());

    record.account = account.toString();
    record.balance = (balance as Balance).toBigInt();
    await record.save();
}

