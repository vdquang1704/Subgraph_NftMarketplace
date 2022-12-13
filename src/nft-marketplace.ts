import { BigInt } from "@graphprotocol/graph-ts"
import {
  ERC1155Listed as ERC1155ListedEvent,
  ERC1155Sold as ERC1155SoldEvent,
  ERC1155ListedInfo as ERC1155ListedInfoEvent,
  ERC1155SoldInfo as ERC1155SoldInfoEvent,
  ERC20Listed as ERC20ListedEvent,
  ERC20Sold as ERC20SoldEvent,
  ERC20ListedInfo as ERC20ListedInfoEvent,
  ERC20SoldInfo as ERC20SoldInfoEvent,
  ERC721Listed as ERC721ListedEvent,
  ERC721Sold as ERC721SoldEvent,
  ERC721ListedInfo as ERC721ListedInfoEvent,
  ERC721SoldInfo as ERC721SoldInfoEvent,

  OwnershipTransferred
  } from "../generated/NftMarketplace/NftMarketplace"
import { ERC1155Listed, ERC1155Sold, ERC20Listed, ERC20Sold, ERC721Listed, ERC721Sold,ERC1155ListedInfoPerWeek, ERC721ListedInfoPerWeek, ERC20ListedInfoPerWeek, ERC1155SoldInfoPerWeek, ERC721SoldInfoPerWeek, ERC20SoldInfoPerWeek, ERC1155ListedInfoPer30Day, ERC1155SoldInfoPer30Day, ERC721ListedInfoPer30Day, ERC721SoldInfoPer30Day, ERC20ListedInfoPer30Day, ERC20SoldInfoPer30Day } from "../generated/schema"

export function handleERC1155Listed(event: ERC1155ListedEvent): void {
  let entity7Days = ERC1155Listed.load(event.transaction.from.toHex())
  
  if (!entity7Days) {
    entity7Days = new ERC1155Listed(event.transaction.from.toHex())
  }
  // entity7Days fields can be set based on event parameters
  entity7Days.nftAddress = event.params.nftAddress
  entity7Days.seller = event.params.seller
  entity7Days.tokenId = event.params.tokenId
  entity7Days.amount = event.params.amount
  entity7Days.price = event.params.price
  
  entity7Days.save()
}

export function handleERC1155ListedInfo(event: ERC1155ListedInfoEvent): void {
  const timeMark = BigInt.fromI32(1670803200)
  const timeIn7Days = BigInt.fromI32(604800)
  const timeIn30Days = BigInt.fromI32(18144000)
  
  const weekNumber = (event.params.timestamp.minus(timeMark)).div(timeIn7Days)
  const weekNumber1 = (event.params.timestamp.minus(timeMark)).div(timeIn30Days)
  
  let entity7Days = ERC1155ListedInfoPerWeek.load(weekNumber.toString())
  let entity30Days = ERC1155ListedInfoPer30Day.load(weekNumber1.toString())


  if (!entity7Days) {
    entity7Days = new ERC1155ListedInfoPerWeek(weekNumber.toString())
  }
  if (!entity30Days) {
    entity30Days = new ERC1155ListedInfoPer30Day(weekNumber1.toString())
  }

  entity7Days.totalTransaction = event.params.totalTransactions
  entity7Days.totalListedToken = event.params.totalListedToken
  entity7Days.totalListedValue = event.params.totalListedValue
  entity7Days.weekNumber = weekNumber.plus(BigInt.fromI32(1))
  entity7Days.startWeek = timeMark.plus(weekNumber.times(timeIn7Days))
  entity7Days.endWeek = timeMark.plus((weekNumber.plus(BigInt.fromI32(1))).times(timeIn7Days))

  entity30Days.totalTransaction = event.params.totalTransactions
  entity30Days.totalListedToken = event.params.totalListedToken
  entity30Days.totalSoldValue = event.params.totalListedValue
  entity30Days.startDay = timeMark.plus(weekNumber1.times(timeIn30Days))
  entity30Days.endDay = timeMark.plus((weekNumber1.plus(BigInt.fromI32(1))).times(timeIn30Days))
  
  entity7Days.save()
  entity30Days.save()
}

export function handleERC1155Sold(event: ERC1155SoldEvent): void {
  let entity7Days = ERC1155Sold.load(event.transaction.from.toHex())
  
  if (!entity7Days) {
    entity7Days = new ERC1155Sold(event.transaction.from.toHex())
  }
  // entity7Days fields can be set based on event parameters
  entity7Days.nftAddress = event.params.nftAddress
  entity7Days.seller = event.params.seller
  entity7Days.buyer = event.params.buyer
  entity7Days.tokenId = event.params.tokenId
  entity7Days.amount = event.params.amount
  entity7Days.price = event.params.price
  
  entity7Days.save()
}

export function handleERC1155SoldInfo(event: ERC1155SoldInfoEvent): void {
  const timeMark = (BigInt.fromI32(1670803200))
  const timeIn7Days = (BigInt.fromI32(604800))
  const timeIn30Days = BigInt.fromI32(18144000)
  
  const weekNumber = (event.params.timestamp.minus(timeMark)).div(timeIn7Days)
  const weekNumber1 = (event.params.timestamp.minus(timeMark)).div(timeIn30Days)
  
  let entity7Days = ERC1155SoldInfoPerWeek.load(weekNumber.toString())
  let entity30Days = ERC1155SoldInfoPer30Day.load(weekNumber1.toString())
 

  if (!entity7Days) {
    entity7Days = new ERC1155SoldInfoPerWeek(weekNumber.toString())
  }
  if (!entity30Days) {
    entity30Days = new ERC1155SoldInfoPer30Day(weekNumber1.toString())
  }

  entity7Days.totalTransaction = event.params.totalTransactions
  entity7Days.totalSoldToken = event.params.totalSoldToken
  entity7Days.totalSoldValue = event.params.totalSoldValue
  entity7Days.weekNumber = weekNumber.plus(BigInt.fromI32(1))
  entity7Days.startWeek = timeMark.plus(weekNumber.times(timeIn7Days))
  entity7Days.endWeek = timeMark.plus((weekNumber.plus(BigInt.fromI32(1))).times(timeIn7Days))

  entity30Days.totalTransaction = event.params.totalTransactions
  entity30Days.totalSoldToken = event.params.totalSoldToken
  entity30Days.totalSoldValue = event.params.totalSoldValue
  entity30Days.startDay = timeMark.plus(weekNumber1.times(timeIn30Days))
  entity30Days.endDay = timeMark.plus((weekNumber1.plus(BigInt.fromI32(1))).times(timeIn30Days))
  
  entity7Days.save()
  entity30Days.save()
}

export function handleERC20Listed(event: ERC20ListedEvent): void {
  let entity7Days = ERC20Listed.load(event.transaction.from.toHex())
  
  if (!entity7Days) {
   entity7Days = new ERC20Listed(event.transaction.from.toHex())
  }
  // entity7Days fields can be set based on event parameters
  entity7Days.tokenAddress = event.params.tokenAddress
  entity7Days.seller = event.params.seller
  entity7Days.price = event.params.price
  entity7Days.amount = event.params.amount
  
  entity7Days.save()
}

export function handleERC20ListedInfo(event: ERC20ListedInfoEvent): void {
  const timeMark = (BigInt.fromI32(1670803200))
  const timeIn7Days = (BigInt.fromI32(604800))
  const timeIn30Days = BigInt.fromI32(18144000)
  
  const weekNumber = ((event.params.timestamp.minus(timeMark)).div(timeIn7Days))
  const weekNumber1 = (event.params.timestamp.minus(timeMark)).div(timeIn30Days)
  
  let entity7Days = ERC20ListedInfoPerWeek.load(weekNumber.toString())
  let entity30Days = ERC20ListedInfoPer30Day.load(weekNumber1.toString())

  if (!entity7Days) {
    entity7Days = new ERC20ListedInfoPerWeek(weekNumber.toString())
  }
  if (!entity30Days) {
    entity30Days = new ERC20ListedInfoPer30Day(weekNumber1.toString())
  }

  entity7Days.totalTransaction = event.params.totalTransactions
  entity7Days.totalListedToken = event.params.totalListedToken
  entity7Days.totalListedValue = event.params.totalListedValue
  entity7Days.weekNumber = weekNumber.plus(BigInt.fromI32(1))
  entity7Days.startWeek = timeMark.plus(weekNumber.times(timeIn7Days))
  entity7Days.endWeek = timeMark.plus((weekNumber.plus(BigInt.fromI32(1))).times(timeIn7Days))

  entity30Days.totalTransaction = event.params.totalTransactions
  entity30Days.totalListedToken = event.params.totalListedToken
  entity30Days.totalListedValue = event.params.totalListedValue
  entity30Days.startDay = timeMark.plus(weekNumber1.times(timeIn30Days))
  entity30Days.endDay = timeMark.plus((weekNumber1.plus(BigInt.fromI32(1))).times(timeIn30Days))
  
  entity7Days.save()
  entity30Days.save()
}

export function handleERC20Sold(event: ERC20SoldEvent): void { 
  let entity7Days = ERC20Sold.load(event.transaction.from.toHex())
  
  if (!entity7Days) {
   entity7Days = new ERC20Sold(event.transaction.from.toHex())
  }
  // entity7Days fields can be set based on event parameters
  entity7Days.tokenAddress = event.params.tokenAddress
  entity7Days.seller = event.params.seller
  entity7Days.buyer = event.params.buyer
  entity7Days.amount = event.params.amount
  
  entity7Days.save()
}

export function handleERC20SoldInfo(event: ERC20SoldInfoEvent): void {
  const timeMark = (BigInt.fromI32(1670803200))
  const timeIn7Days = (BigInt.fromI32(604800))
  const timeIn30Days = BigInt.fromI32(18144000)
  
  const weekNumber = ((event.params.timestamp.minus(timeMark)).div(timeIn7Days))
  const weekNumber1 = (event.params.timestamp.minus(timeMark)).div(timeIn30Days)
  
  let entity7Days = ERC20SoldInfoPerWeek.load(weekNumber.toString())
  let entity30Days = ERC20SoldInfoPer30Day.load(weekNumber1.toString())

  if (!entity7Days) {
    entity7Days = new ERC20SoldInfoPerWeek(weekNumber.toString())
  }
  if (!entity30Days) {
    entity30Days = new ERC20SoldInfoPer30Day(weekNumber1.toString())
  }

  entity7Days.totalTransaction = event.params.totalTransactions
  entity7Days.totalSoldToken = event.params.totalSoldToken
  entity7Days.totalSoldValue = event.params.totalSoldValue
  entity7Days.weekNumber = weekNumber.plus(BigInt.fromI32(1))
  entity7Days.startWeek = timeMark.plus(weekNumber.times(timeIn7Days))
  entity7Days.endWeek = timeMark.plus((weekNumber.plus(BigInt.fromI32(1))).times(timeIn7Days))

  entity30Days.totalTransaction = event.params.totalTransactions
  entity30Days.totalSoldToken = event.params.totalSoldToken
  entity30Days.totalSoldValue = event.params.totalSoldValue
  
  entity30Days.startDay = timeMark.plus(weekNumber1.times(timeIn30Days))
  entity30Days.endDay = timeMark.plus((weekNumber1.plus(BigInt.fromI32(1))).times(timeIn30Days))
  
  entity7Days.save()
  entity30Days.save()
}



export function handleERC721Listed(event: ERC721ListedEvent): void { 
  let entity7Days = ERC721Listed.load(event.transaction.from.toHex())
 
  if (!entity7Days) {
   entity7Days = new ERC721Listed(event.transaction.from.toHex())
  }
  // entity7Days fields can be set based on event parameters
  entity7Days.nftAddress = event.params.nftAddress
  entity7Days.seller = event.params.seller
  entity7Days.tokenId = event.params.tokenId
  entity7Days.price = event.params.price
  
  entity7Days.save()
}

export function handleERC721ListedInfo(event: ERC721ListedInfoEvent): void {
  const timeMark = (BigInt.fromI32(1670803200))
  const timeIn7Days = (BigInt.fromI32(604800))
  const timeIn30Days = (BigInt.fromI32(18144000))
  
  const weekNumber = ((event.params.timestamp.minus(timeMark)).div(timeIn7Days))
  const weekNumber1 = (event.params.timestamp.minus(timeMark)).div(timeIn30Days)
  
  let entity7Days = ERC721ListedInfoPerWeek.load(weekNumber.toString())
  let entity30Days = ERC721ListedInfoPer30Day.load(weekNumber1.toString())


  if (!entity7Days) {
    entity7Days = new ERC721ListedInfoPerWeek(weekNumber.toString())
  }
  if (!entity30Days) {
    entity30Days = new ERC721ListedInfoPer30Day(weekNumber1.toString())
  }

  entity7Days.totalTransaction = event.params.totalTransactions
  entity7Days.totalListedNft = event.params.totalListedNft
  entity7Days.totalListedValue = event.params.totalListedValue
  entity7Days.weekNumber = weekNumber.plus(BigInt.fromI32(1))
  entity7Days.startWeek = timeMark.plus(weekNumber.times(timeIn7Days))
  entity7Days.endWeek = timeMark.plus((weekNumber.plus(BigInt.fromI32(1))).times(timeIn7Days))

  entity30Days.totalTransaction = event.params.totalTransactions
  entity30Days.totalListedNft = event.params.totalListedNft
  entity30Days.totalListedValue = event.params.totalListedValue
  entity30Days.startDay = timeMark.plus(weekNumber1.times(timeIn30Days))
  entity30Days.endDay = timeMark.plus((weekNumber1.plus(BigInt.fromI32(1))).times(timeIn30Days))
  
  entity7Days.save()
  entity30Days.save()
}

export function handleERC721Sold(event: ERC721SoldEvent): void { 
  let entity7Days = ERC721Sold.load(event.transaction.from.toHex())
  
  if (!entity7Days) {
   entity7Days = new ERC721Sold(event.transaction.from.toHex())
  }
  // entity7Days fields can be set based on event parameters
  entity7Days.nftAddress = event.params.nftAddress
  entity7Days.seller = event.params.seller
  entity7Days.buyer = event.params.buyer
  entity7Days.tokenId = event.params.tokenId
  entity7Days.price = event.params.price
  
  entity7Days.save()
}

export function handleERC721SoldInfo(event: ERC721SoldInfoEvent): void {
  const timeMark = BigInt.fromI32(1670803200)
  const timeIn7Days = BigInt.fromI32(604800)
  const timeIn30Days = BigInt.fromI32(18144000)
  
  const weekNumber = ((event.params.timestamp.minus(timeMark)).div(timeIn7Days))
  const weekNumber1 = (event.params.timestamp.minus(timeMark)).div(timeIn30Days)
 
  let entity7Days = ERC721SoldInfoPerWeek.load(weekNumber.toString())
  let entity30Days = ERC721SoldInfoPer30Day.load(weekNumber1.toString())

  if (!entity7Days) {
    entity7Days = new ERC721SoldInfoPerWeek(weekNumber.toString())
  }
  if (!entity30Days) {
    entity30Days = new ERC721SoldInfoPer30Day(weekNumber1.toString())
  }

  entity7Days.totalTransaction = event.params.totalTransactions
  entity7Days.totalSoldNft = event.params.totalSoldNft
  entity7Days.totalSoldValue = event.params.totalSoldValue
  entity7Days.weekNumber = weekNumber.plus(BigInt.fromI32(1))
  entity7Days.startWeek = timeMark.plus(weekNumber.times(timeIn7Days))
  entity7Days.endWeek = timeMark.plus((weekNumber.plus(BigInt.fromI32(1))).times(timeIn7Days))

  entity30Days.totalTransaction = event.params.totalTransactions
  entity30Days.totalSoldNft = event.params.totalSoldNft
  entity30Days.totalSoldValue = event.params.totalSoldValue
  entity30Days.startDay = timeMark.plus(weekNumber1.times(timeIn30Days))
  entity30Days.endDay = timeMark.plus((weekNumber1.plus(BigInt.fromI32(1))).times(timeIn30Days))
  
  entity7Days.save()
  entity30Days.save()
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}


