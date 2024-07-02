import React from 'react';

const IPFSImage = ({ ipfsHash }) => {
  const ipfsUrl = `https://violet-high-guan-715.mypinata.cloud/ipfs/${ipfsHash}`;

  return (
    <div>
      <img src={ipfsUrl} alt="NFT" />
    </div>
  );
};

export default IPFSImage;
