import { Tag } from "antd";

const MintNFTs = () => {
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
              Random NFT
            </div>
            <div className="mt-3">
              <button className="btn btn-mint">
                Mint NFTs&nbsp;
              </button>
            </div>
          </div>
          <div className="fw-bold mt-3">
            Total estimated cost (fees included) :
            <span className="ms-2"><Tag color="cyan">Fee: 0.0001 Ether</Tag></span>
          </div>
        </div>

        <div className="text-center">

        </div>
      </div>
    </main>
  );
}

export default MintNFTs;
