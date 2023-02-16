import { generateValidator, JSONSchema, ValidateFunction } from "../validation";
import { BodyShape } from "./body-shape";
import { ChainId } from "./chain-id";
import { Network } from "./network";
import { NFTCategory } from "./nft-category";

export type NFT = {
  id: string;
  contractAddress: string;
  tokenId: string;
  activeBreedingOrderId: string | null;
  activeOrderId: string | null;
  owner: string;
  name: string;
  category: NFTCategory;
  tokenURI: string;
  image: string;
  url: string;
  issuedId: string | null;
  itemId: string | null;
  data: {
    kryptomon?: {
      description: string | null;
      isHatched: boolean;
      matronId: string;
      sireId: string;
      status: string;
      timeBorn: number;
      timeHatched: number;
      elementType: string;
      speciality: string;
      breedingsLeft: number;
      breedingCount: number;
      totalBreedingCount: number;
      timeCanBreed: number;
      lastEvolved: number;
      lastTimeBred: number;
      maxBreedingsDuringLifePhase: number;
      ranking: number;
      genes: {
        fire: number;
        fireTalent: number;
        water: number;
        waterTalent: number;
        ice: number;
        iceTalent: number;
        ground: number;
        groundTalent: number;
        air: number;
        airTalent: number;
        electro: number;
        electroTalent: number;
        ghost: number;
        ghostTalent: number;
        grass: number;
        grassTalent: number;
        color: number;
        sex: number;
        generalTalent: number;
        attack: number;
        defense: number;
        special: number;
        xFactor: number;
        growthTalentFactor: number;
        constitution: number;
        healthPoints: number;
        speed: number;
        affections: number;
        crazyness: number;
        instinct: number;
        hunger: number;
        laziness: number;
        brave: number;
        smart: number;
        bodySize: number;
        ego: number;
        skinType: number;
        generation: number;
      };
      extraData: {
        unfreezable: number;
      };
    };
  };
  network: Network;
  chainId: ChainId;
  createdAt: number;
  updatedAt: number;
};

export namespace NFT {
  export const schema: JSONSchema<NFT> = {
    type: "object",
    properties: {
      id: {
        type: "string",
      },
      tokenId: {
        type: "string",
      },
      contractAddress: {
        type: "string",
      },
      activeBreedingOrderId: {
        type: "string",
        nullable: true,
      },
      activeOrderId: {
        type: ["string"],
        nullable: true,
      },
      owner: {
        type: "string",
      },
      name: {
        type: "string",
      },
      tokenURI: {
        type: "string",
      },
      image: {
        type: "string",
      },
      url: {
        type: "string",
      },
      data: {
        type: "object",
        nullable: false,
        properties: {
          kryptomon: {
            type: "object",
            nullable: true,
            required: [],
            properties: {
              description: {
                type: "string",
                nullable: true,
              },
              ranking: {
                type: "number"
              },
              isHatched: {
                type: "boolean",
              },
              matronId: {
                type: "string",
              },
              sireId: {
                type: "string",
              },
              status: {
                type: "string",
              },
              timeBorn: {
                type: "number",
              },
              timeHatched: {
                type: "number",
              },
              elementType: {
                type: "string",
              },
              speciality: {
                type: "string",
              },
              breedingsLeft : {
                type: "number",
              },
              breedingCount : {
                type: "number",
              },
              totalBreedingCount : {
                type: "number",
              },
              timeCanBreed : {
                type: "number",
              },
              lastEvolved : {
                type: "number",
                nullable: true
              },
              lastTimeBred : {
                type: "number"
              },
              maxBreedingsDuringLifePhase: {
                type: "number"
              },
              genes: {
                type: "object",
                required: [],
                properties: {
                  fire: {
                    type: "number",
                  },
                  fireTalent: {
                    type: "number",
                  },
                  water: {
                    type: "number",
                  },
                  waterTalent: {
                    type: "number",
                  },
                  ice: {
                    type: "number",
                  },
                  iceTalent: {
                    type: "number",
                  },
                  ground: {
                    type: "number",
                  },
                  groundTalent: {
                    type: "number",
                  },
                  air: {
                    type: "number",
                  },
                  airTalent: {
                    type: "number",
                  },
                  electro: {
                    type: "number",
                  },
                  electroTalent: {
                    type: "number",
                  },
                  ghost: {
                    type: "number",
                  },
                  ghostTalent: {
                    type: "number",
                  },
                  grass: {
                    type: "number",
                  },
                  grassTalent: {
                    type: "number",
                  },
                  color: {
                    type: "number",
                  },
                  sex: {
                    type: "number",
                  },
                  generalTalent: {
                    type: "number",
                  },
                  attack: {
                    type: "number",
                  },
                  defense: {
                    type: "number",
                  },
                  special: {
                    type: "number",
                  },
                  xFactor: {
                    type: "number",
                  },
                  growthTalentFactor: {
                    type: "number",
                  },
                  constitution: {
                    type: "number",
                  },
                  healthPoints: {
                    type: "number",
                  },
                  speed: {
                    type: "number",
                  },
                  affections: {
                    type: "number",
                  },
                  crazyness: {
                    type: "number",
                  },
                  instinct: {
                    type: "number",
                  },
                  hunger: {
                    type: "number",
                  },
                  laziness: {
                    type: "number",
                  },
                  brave: {
                    type: "number",
                  },
                  smart: {
                    type: "number",
                  },
                  bodySize: {
                    type: "number",
                  },
                  ego: {
                    type: "number",
                  },
                  skinType: {
                    type: "number",
                  },
                  generation: {
                    type: "number",
                  },
                },
              },
              extraData: {
                type: "object",
                required: [],
                properties: {
                  unfreezable: {
                    type: "number",
                  },
                },
              },
            },
          },
        },
        required: [],
      },
      issuedId: {
        type: "string",
        nullable: true,
      },
      itemId: {
        type: "string",
        nullable: true,
      },
      category: NFTCategory.schema,
      network: Network.schema,
      chainId: ChainId.schema,
      createdAt: {
        type: "integer",
      },
      updatedAt: {
        type: "integer",
      },
    },
    required: [
      "id",
      "tokenId",
      "contractAddress",
      "activeOrderId",
      "owner",
      "name",
      "image",
      "url",
      "data",
      "issuedId",
      "itemId",
      "category",
      "network",
      "chainId",
      "createdAt",
      "updatedAt",
    ],
  };

  export const validate: ValidateFunction<NFT> = generateValidator(schema);
}
