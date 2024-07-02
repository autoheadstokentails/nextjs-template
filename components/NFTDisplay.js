import React, { useEffect, useState } from 'react';
import IPFSImage from './IPFSImage';
import IPFSAudio from './IPFSAudio';
import ConservationStatus from './ConservationStatus';

const NFTDisplay = () => {
  const [metadata, setMetadata] = useState(null);
  const [error, setError] = useState(null);

  // Hardcoded values for testing
  const contractAddress = '0x79C5E4B90696C09Aa427a289c6c9cb038CaC0096'; // Hardcoded contract address
  const tokenId = 7; // Hardcoded token ID
  const imageCID = 'QmW6gdidhHXkGiFrRYMtLtUj9HabURVBgRyGcp5aHcaPM5'; // Hardcoded IPFS image CID
  const audioCID = 'QmfLqp29wtariEDfD2FhWLZVS4cY2G4X13tCoGg1jEvyqo'; // Hardcoded IPFS audio CID
  const speciesName = 'Panthera tigris'; // Hardcoded species name for testing

  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        // Uncomment the following lines when ready to fetch actual metadata
        // Connect to Ethereum network (assumes MetaMask or similar provider)
        // const provider = new ethers.providers.Web3Provider(window.ethereum);
        // const contract = new ethers.Contract(contractAddress, [
        //   'function tokenURI(uint256 tokenId) external view returns (string memory)'
        // ], provider);

        // Fetch the token URI (metadata URL)
        // const tokenURI = await contract.tokenURI(tokenId);

        // Fetch the metadata from the token URI
        // const response = await fetch(tokenURI);
        // const data = await response.json();

        // Simulate fetching metadata with hardcoded values for now
        const data = {
          image: imageCID,
          audio: audioCID,
          speciesName: speciesName,
        };
        setMetadata(data);
      } catch (err) {
        console.error('Error fetching metadata:', err);
        setError('Failed to load NFT metadata');
      }
    };

    fetchMetadata();
  }, [imageCID, audioCID, speciesName]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!metadata) {
    return <div>Loading...</div>;
  }

  return (
    <div className="text-center p-5">
      <div className="mb-5">
        <IPFSImage ipfsHash={metadata.image} />
      </div>
      <div className="mb-5">
        <IPFSAudio ipfsHash={metadata.audio} />
      </div>
      <div className="mb-5">
        <ConservationStatus speciesName={metadata.speciesName} />
      </div>
    </div>
  );
};

export default NFTDisplay;
