import { BigInt } from "@graphprotocol/graph-ts"
import {
  NftMarketplace,
  ERC1155Listed,
  ERC1155Sold,
  ERC20Listed,
  ERC20Sold,
  ERC721Listed,
  ERC721Sold,
  OwnershipTransferred
} from "../generated/NftMarketplace/NftMarketplace"
import { ExampleEntity } from "../generated/schema"

export function handleERC1155Listed(event: ERC1155Listed): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.nftAddress = event.params.nftAddress
  entity.seller = event.params.seller

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.ERC1155List(...)
  // - contract.ERC20List(...)
  // - contract.ERC721Count(...)
  // - contract.ERC721List(...)
  // - contract._listingERC20(...)
  // - contract._listingIds(...)
  // - contract.getListingERC1155(...)
  // - contract.getListingERC20(...)
  // - contract.getListingERC721(...)
  // - contract.owner(...)
  // - contract.tokenERC20Listing(...)
  // - contract.tokenERC20Sold(...)
}

export function handleERC1155Sold(event: ERC1155Sold): void {}

export function handleERC20Listed(event: ERC20Listed): void {}

export function handleERC20Sold(event: ERC20Sold): void {}

export function handleERC721Listed(event: ERC721Listed): void {}

export function handleERC721Sold(event: ERC721Sold): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}
