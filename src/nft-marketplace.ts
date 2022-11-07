import { BigInt } from "@graphprotocol/graph-ts"
import {
  NftMarketplace,
  ERC1155Listed as ERC1155ListedEvent,
  ERC1155Sold as ERC1155SoldEvent,
  ERC20Listed as ERC20ListedEvent,
  ERC20Sold as ERC20SoldEvent,
  ERC721Listed as ERC721ListedEvent,
  ERC721Sold as ERC721SoldEvent,
  OwnershipTransferred
} from "../generated/NftMarketplace/NftMarketplace"
import { ERC1155Listed, ERC1155Sold, ERC20Listed, ERC20Sold, ERC721Listed, ERC721Sold } from "../generated/schema"

export function handleERC1155Listed(event: ERC1155ListedEvent): void {
  let entity = ERC1155Listed.load(event.transaction.from.toHex())

  if (!entity) {
    entity = new ERC1155Listed(event.transaction.from.toHex())
    // Entity fields can be set using simple assignments
    // entity.count = BigInt.fromI32(0)
  }
  // Entity fields can be set based on event parameters
  entity.nftAddress = event.params.nftAddress
  entity.seller = event.params.seller
  entity.tokenId = event.params.tokenId
  entity.amount = event.params.amount
  entity.price = event.params.price
  entity.save()
}

export function handleERC1155Sold(event: ERC1155SoldEvent): void {
  let entity = ERC1155Sold.load(event.transaction.from.toHex())

  if (!entity) {
    entity = new ERC1155Sold(event.transaction.from.toHex())
  }
  // Entity fields can be set based on event parameters
  entity.nftAddress = event.params.nftAddress
  entity.seller = event.params.seller
  entity.buyer = event.params.buyer
  entity.tokenId = event.params.tokenId
  entity.amount = event.params.amount
  entity.price = event.params.price
  entity.save()
}

export function handleERC20Listed(event: ERC20ListedEvent): void {
  let entity = ERC20Listed.load(event.transaction.from.toHex())

  if (!entity) {
   entity = new ERC20Listed(event.transaction.from.toHex())
  }
  // Entity fields can be set based on event parameters
  entity.tokenAddress = event.params.tokenAddress
  entity.seller = event.params.seller
  entity.price = event.params.price
  entity.amount = event.params.amount
  entity.save()
}

export function handleERC20Sold(event: ERC20SoldEvent): void { let entity = ERC20Sold.load(event.transaction.from.toHex())
  
  if (!entity) {
   entity = new ERC20Sold(event.transaction.from.toHex())
  }
  // Entity fields can be set based on event parameters
  entity.tokenAddress = event.params.tokenAddress
  entity.seller = event.params.seller
  entity.buyer = event.params.buyer
  entity.amount = event.params.amount
  entity.save()
}

export function handleERC721Listed(event: ERC721ListedEvent): void { let entity = ERC721Listed.load(event.transaction.from.toHex())

  if (!entity) {
   entity = new ERC721Listed(event.transaction.from.toHex())
  }
  // Entity fields can be set based on event parameters
  entity.nftAddress = event.params.nftAddress
  entity.seller = event.params.seller
  entity.tokenId = event.params.tokenId
  entity.price = event.params.price
  entity.save()
}

export function handleERC721Sold(event: ERC721SoldEvent): void { let entity = ERC721Sold.load(event.transaction.from.toHex())

  if (!entity) {
   entity = new ERC721Sold(event.transaction.from.toHex())
  }
  // Entity fields can be set based on event parameters
  entity.nftAddress = event.params.nftAddress
  entity.seller = event.params.seller
  entity.buyer = event.params.buyer
  entity.tokenId = event.params.tokenId
  entity.price = event.params.price
  entity.save()}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}
