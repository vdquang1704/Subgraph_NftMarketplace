import {
  ERC1155Listed as ERC1155ListedEvent,
  ERC1155ListedInfo as ERC1155ListedInfoEvent,
  ERC1155Sold as ERC1155SoldEvent,
  ERC1155SoldInfo as ERC1155SoldInfoEvent,
  ERC20Listed as ERC20ListedEvent,
  ERC20ListedInfo as ERC20ListedInfoEvent,
  ERC20Sold as ERC20SoldEvent,
  ERC20SoldInfo as ERC20SoldInfoEvent,
  ERC721Listed as ERC721ListedEvent,
  ERC721ListedInfo as ERC721ListedInfoEvent,
  ERC721Sold as ERC721SoldEvent,
  ERC721SoldInfo as ERC721SoldInfoEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/NftMarketplace/NftMarketplace"
import {
  ERC1155Listed,
  ERC1155ListedInfo,
  ERC1155Sold,
  ERC1155SoldInfo,
  ERC20Listed,
  ERC20ListedInfo,
  ERC20Sold,
  ERC20SoldInfo,
  ERC721Listed,
  ERC721ListedInfo,
  ERC721Sold,
  ERC721SoldInfo,
  OwnershipTransferred
} from "../generated/schema"

export function handleERC1155Listed(event: ERC1155ListedEvent): void {
  let entity = new ERC1155Listed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nftAddress = event.params.nftAddress
  entity.seller = event.params.seller
  entity.tokenId = event.params.tokenId
  entity.amount = event.params.amount
  entity.price = event.params.price

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleERC1155ListedInfo(event: ERC1155ListedInfoEvent): void {
  let entity = new ERC1155ListedInfo(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.totalTransactions = event.params.totalTransactions
  entity.totalListedToken = event.params.totalListedToken
  entity.totalListedValue = event.params.totalListedValue
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleERC1155Sold(event: ERC1155SoldEvent): void {
  let entity = new ERC1155Sold(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nftAddress = event.params.nftAddress
  entity.seller = event.params.seller
  entity.buyer = event.params.buyer
  entity.tokenId = event.params.tokenId
  entity.amount = event.params.amount
  entity.price = event.params.price

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleERC1155SoldInfo(event: ERC1155SoldInfoEvent): void {
  let entity = new ERC1155SoldInfo(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.totalTransactions = event.params.totalTransactions
  entity.totalSoldToken = event.params.totalSoldToken
  entity.totalSoldValue = event.params.totalSoldValue
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleERC20Listed(event: ERC20ListedEvent): void {
  let entity = new ERC20Listed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenAddress = event.params.tokenAddress
  entity.seller = event.params.seller
  entity.price = event.params.price
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleERC20ListedInfo(event: ERC20ListedInfoEvent): void {
  let entity = new ERC20ListedInfo(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.totalTransactions = event.params.totalTransactions
  entity.totalListedToken = event.params.totalListedToken
  entity.totalListedValue = event.params.totalListedValue
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleERC20Sold(event: ERC20SoldEvent): void {
  let entity = new ERC20Sold(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenAddress = event.params.tokenAddress
  entity.seller = event.params.seller
  entity.buyer = event.params.buyer
  entity.amount = event.params.amount
  entity.price = event.params.price

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleERC20SoldInfo(event: ERC20SoldInfoEvent): void {
  let entity = new ERC20SoldInfo(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.totalTransactions = event.params.totalTransactions
  entity.totalSoldToken = event.params.totalSoldToken
  entity.totalSoldValue = event.params.totalSoldValue
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleERC721Listed(event: ERC721ListedEvent): void {
  let entity = new ERC721Listed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nftAddress = event.params.nftAddress
  entity.seller = event.params.seller
  entity.tokenId = event.params.tokenId
  entity.price = event.params.price

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleERC721ListedInfo(event: ERC721ListedInfoEvent): void {
  let entity = new ERC721ListedInfo(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.totalTransactions = event.params.totalTransactions
  entity.totalListedNft = event.params.totalListedNft
  entity.totalListedValue = event.params.totalListedValue
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleERC721Sold(event: ERC721SoldEvent): void {
  let entity = new ERC721Sold(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nftAddress = event.params.nftAddress
  entity.seller = event.params.seller
  entity.buyer = event.params.buyer
  entity.tokenId = event.params.tokenId
  entity.price = event.params.price

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleERC721SoldInfo(event: ERC721SoldInfoEvent): void {
  let entity = new ERC721SoldInfo(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.totalTransactions = event.params.totalTransactions
  entity.totalSoldNft = event.params.totalSoldNft
  entity.totalSoldValue = event.params.totalSoldValue
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
