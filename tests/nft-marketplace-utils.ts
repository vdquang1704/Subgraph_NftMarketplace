import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
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
} from "../generated/NftMarketplace/NftMarketplace"

export function createERC1155ListedEvent(
  nftAddress: Address,
  seller: Address,
  tokenId: BigInt,
  amount: BigInt,
  price: BigInt
): ERC1155Listed {
  let erc1155ListedEvent = changetype<ERC1155Listed>(newMockEvent())

  erc1155ListedEvent.parameters = new Array()

  erc1155ListedEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  erc1155ListedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  erc1155ListedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  erc1155ListedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  erc1155ListedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )

  return erc1155ListedEvent
}

export function createERC1155ListedInfoEvent(
  totalTransactions: BigInt,
  totalListedToken: BigInt,
  totalListedValue: BigInt,
  timestamp: BigInt
): ERC1155ListedInfo {
  let erc1155ListedInfoEvent = changetype<ERC1155ListedInfo>(newMockEvent())

  erc1155ListedInfoEvent.parameters = new Array()

  erc1155ListedInfoEvent.parameters.push(
    new ethereum.EventParam(
      "totalTransactions",
      ethereum.Value.fromUnsignedBigInt(totalTransactions)
    )
  )
  erc1155ListedInfoEvent.parameters.push(
    new ethereum.EventParam(
      "totalListedToken",
      ethereum.Value.fromUnsignedBigInt(totalListedToken)
    )
  )
  erc1155ListedInfoEvent.parameters.push(
    new ethereum.EventParam(
      "totalListedValue",
      ethereum.Value.fromUnsignedBigInt(totalListedValue)
    )
  )
  erc1155ListedInfoEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return erc1155ListedInfoEvent
}

export function createERC1155SoldEvent(
  nftAddress: Address,
  seller: Address,
  buyer: Address,
  tokenId: BigInt,
  amount: BigInt,
  price: BigInt
): ERC1155Sold {
  let erc1155SoldEvent = changetype<ERC1155Sold>(newMockEvent())

  erc1155SoldEvent.parameters = new Array()

  erc1155SoldEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  erc1155SoldEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  erc1155SoldEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  erc1155SoldEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  erc1155SoldEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  erc1155SoldEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )

  return erc1155SoldEvent
}

export function createERC1155SoldInfoEvent(
  totalTransactions: BigInt,
  totalSoldToken: BigInt,
  totalSoldValue: BigInt,
  timestamp: BigInt
): ERC1155SoldInfo {
  let erc1155SoldInfoEvent = changetype<ERC1155SoldInfo>(newMockEvent())

  erc1155SoldInfoEvent.parameters = new Array()

  erc1155SoldInfoEvent.parameters.push(
    new ethereum.EventParam(
      "totalTransactions",
      ethereum.Value.fromUnsignedBigInt(totalTransactions)
    )
  )
  erc1155SoldInfoEvent.parameters.push(
    new ethereum.EventParam(
      "totalSoldToken",
      ethereum.Value.fromUnsignedBigInt(totalSoldToken)
    )
  )
  erc1155SoldInfoEvent.parameters.push(
    new ethereum.EventParam(
      "totalSoldValue",
      ethereum.Value.fromUnsignedBigInt(totalSoldValue)
    )
  )
  erc1155SoldInfoEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return erc1155SoldInfoEvent
}

export function createERC20ListedEvent(
  tokenAddress: Address,
  seller: Address,
  price: BigInt,
  amount: BigInt
): ERC20Listed {
  let erc20ListedEvent = changetype<ERC20Listed>(newMockEvent())

  erc20ListedEvent.parameters = new Array()

  erc20ListedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )
  erc20ListedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  erc20ListedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  erc20ListedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return erc20ListedEvent
}

export function createERC20ListedInfoEvent(
  totalTransactions: BigInt,
  totalListedToken: BigInt,
  totalListedValue: BigInt,
  timestamp: BigInt
): ERC20ListedInfo {
  let erc20ListedInfoEvent = changetype<ERC20ListedInfo>(newMockEvent())

  erc20ListedInfoEvent.parameters = new Array()

  erc20ListedInfoEvent.parameters.push(
    new ethereum.EventParam(
      "totalTransactions",
      ethereum.Value.fromUnsignedBigInt(totalTransactions)
    )
  )
  erc20ListedInfoEvent.parameters.push(
    new ethereum.EventParam(
      "totalListedToken",
      ethereum.Value.fromUnsignedBigInt(totalListedToken)
    )
  )
  erc20ListedInfoEvent.parameters.push(
    new ethereum.EventParam(
      "totalListedValue",
      ethereum.Value.fromUnsignedBigInt(totalListedValue)
    )
  )
  erc20ListedInfoEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return erc20ListedInfoEvent
}

export function createERC20SoldEvent(
  tokenAddress: Address,
  seller: Address,
  buyer: Address,
  amount: BigInt,
  price: BigInt
): ERC20Sold {
  let erc20SoldEvent = changetype<ERC20Sold>(newMockEvent())

  erc20SoldEvent.parameters = new Array()

  erc20SoldEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )
  erc20SoldEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  erc20SoldEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  erc20SoldEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  erc20SoldEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )

  return erc20SoldEvent
}

export function createERC20SoldInfoEvent(
  totalTransactions: BigInt,
  totalSoldToken: BigInt,
  totalSoldValue: BigInt,
  timestamp: BigInt
): ERC20SoldInfo {
  let erc20SoldInfoEvent = changetype<ERC20SoldInfo>(newMockEvent())

  erc20SoldInfoEvent.parameters = new Array()

  erc20SoldInfoEvent.parameters.push(
    new ethereum.EventParam(
      "totalTransactions",
      ethereum.Value.fromUnsignedBigInt(totalTransactions)
    )
  )
  erc20SoldInfoEvent.parameters.push(
    new ethereum.EventParam(
      "totalSoldToken",
      ethereum.Value.fromUnsignedBigInt(totalSoldToken)
    )
  )
  erc20SoldInfoEvent.parameters.push(
    new ethereum.EventParam(
      "totalSoldValue",
      ethereum.Value.fromUnsignedBigInt(totalSoldValue)
    )
  )
  erc20SoldInfoEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return erc20SoldInfoEvent
}

export function createERC721ListedEvent(
  nftAddress: Address,
  seller: Address,
  tokenId: BigInt,
  price: BigInt
): ERC721Listed {
  let erc721ListedEvent = changetype<ERC721Listed>(newMockEvent())

  erc721ListedEvent.parameters = new Array()

  erc721ListedEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  erc721ListedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  erc721ListedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  erc721ListedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )

  return erc721ListedEvent
}

export function createERC721ListedInfoEvent(
  totalTransactions: BigInt,
  totalListedNft: BigInt,
  totalListedValue: BigInt,
  timestamp: BigInt
): ERC721ListedInfo {
  let erc721ListedInfoEvent = changetype<ERC721ListedInfo>(newMockEvent())

  erc721ListedInfoEvent.parameters = new Array()

  erc721ListedInfoEvent.parameters.push(
    new ethereum.EventParam(
      "totalTransactions",
      ethereum.Value.fromUnsignedBigInt(totalTransactions)
    )
  )
  erc721ListedInfoEvent.parameters.push(
    new ethereum.EventParam(
      "totalListedNft",
      ethereum.Value.fromUnsignedBigInt(totalListedNft)
    )
  )
  erc721ListedInfoEvent.parameters.push(
    new ethereum.EventParam(
      "totalListedValue",
      ethereum.Value.fromUnsignedBigInt(totalListedValue)
    )
  )
  erc721ListedInfoEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return erc721ListedInfoEvent
}

export function createERC721SoldEvent(
  nftAddress: Address,
  seller: Address,
  buyer: Address,
  tokenId: BigInt,
  price: BigInt
): ERC721Sold {
  let erc721SoldEvent = changetype<ERC721Sold>(newMockEvent())

  erc721SoldEvent.parameters = new Array()

  erc721SoldEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  erc721SoldEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  erc721SoldEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  erc721SoldEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  erc721SoldEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )

  return erc721SoldEvent
}

export function createERC721SoldInfoEvent(
  totalTransactions: BigInt,
  totalSoldNft: BigInt,
  totalSoldValue: BigInt,
  timestamp: BigInt
): ERC721SoldInfo {
  let erc721SoldInfoEvent = changetype<ERC721SoldInfo>(newMockEvent())

  erc721SoldInfoEvent.parameters = new Array()

  erc721SoldInfoEvent.parameters.push(
    new ethereum.EventParam(
      "totalTransactions",
      ethereum.Value.fromUnsignedBigInt(totalTransactions)
    )
  )
  erc721SoldInfoEvent.parameters.push(
    new ethereum.EventParam(
      "totalSoldNft",
      ethereum.Value.fromUnsignedBigInt(totalSoldNft)
    )
  )
  erc721SoldInfoEvent.parameters.push(
    new ethereum.EventParam(
      "totalSoldValue",
      ethereum.Value.fromUnsignedBigInt(totalSoldValue)
    )
  )
  erc721SoldInfoEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return erc721SoldInfoEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}
