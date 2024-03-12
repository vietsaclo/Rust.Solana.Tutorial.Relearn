import { Tag } from "antd";
import UseContractMintNFTsCatHook from "../../hooks/UseContractMintNFTsCatHook";

const MintNFTs = () => {
  const { UseGetCandyMachineId } = UseContractMintNFTsCatHook();

  const hanldeMintNFT = () => {
    const candyMC = UseGetCandyMachineId();
    console.log({ candyMC });
  }

  return (
    <main className="mint-page">
      <div className="container">
        <div className="mint-box d-flex align-items-center justify-content-center">
          <p className="mint-v3_chose text-center">Mint NFT K-Cats<span className="noti">Touch the button below and enjoy your meal.</span></p>
        </div>


        <div className="text-center">
          <div className="d-flex flex-column align-items-center">
            <div className="center-element text-center fw-bold" style={{
              width: '18rem',
              height: '86px',
              backgroundColor: "wheat",
              color: 'ActiveBorder',
              fontSize: '30px',
              borderRadius: '20px'
            }}>
              K-CATs Collection
            </div>
            <div className="mt-3">
              <button onClick={hanldeMintNFT} className="btn btn-mint">
                Mint NFT&nbsp;
              </button>
            </div>
          </div>
          <div className="fw-bold mt-3">
            Total estimated cost (fees included) :
            <span className="ms-2"><Tag color="cyan">Fee: 0.01 Sol</Tag></span>
          </div>
        </div>

        <div className="text-center">

        </div>
      </div>
    </main>
  );
}

export default MintNFTs;
