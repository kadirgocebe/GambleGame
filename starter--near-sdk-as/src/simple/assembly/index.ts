import { storage, Context } from "near-sdk-as"

// return the string 'hello world'
export function helloWorld(): string {
  const predecessor = Context.predecessor
  return 'hello ' + predecessor
}

// read the given key from account (contract) storage
export function read(key: string): string {
  if (storage.hasKey(key)) {
    return `✅ Key [ ${key} ] has value [ ${storage.getString(key)!} ]`
  } else {
    return `🚫 Key [ ${key} ] not found in storage. ( ${storageReport()} )`
  }
}

// write the given value at the given key to account (contract) storage
export function write(key: string, value: string): string {
  storage.set(key, value)
  return `✅ Data saved. ( ${storageReport()} )`
}

// private helper method used by read() and write() above
function storageReport(): string {
  return `storage [ ${Context.storageUsage} bytes ]`
}

export function whatsYourName(): string{
return ` My name is ${Context.contractName}
I receive a call from ${Context.predecessor}
The call was initiated (signed and send) by ${Context.sender}`
}

export function showMeMoney(): string{
return ` I just received ${Context.attachedDeposit} attached to this call
 and now my balance is ${Context.accountBalance}`
}


