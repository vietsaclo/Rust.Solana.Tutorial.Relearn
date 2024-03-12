import { PublicKey } from "@solana/web3.js";

const UseContractMintNFTsCatHook = () => {
  const UseGetCandyMachineId = () => {
    const mintAdd = process.env.REACT_APP_CANDY_MACHINE_ID;
    if (!mintAdd) return null;
    return new PublicKey(mintAdd);
  }

  return {
    UseGetCandyMachineId,
  }
}

export default UseContractMintNFTsCatHook;
