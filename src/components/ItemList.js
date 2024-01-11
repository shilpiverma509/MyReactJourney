import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map(({ card }) => {
        return (
          <div
            key={card.info.id}
            className="text-left p-2 m-2 flex justify-between  border-gray-200 border-b-2"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span>{card.info.name}</span>
                <span> - ₹ {card.info.price / 100}</span>
              </div>
              <p className="text-xs">{card.info.description}</p>
            </div>
            <div className="w-3/12 p-4">
              <div>
                {card.info.showImage && (
                  <img
                    className="w-40"
                    src={`${CDN_URL}/${card.info.imageId}`}
                  />
                )}
              </div>

              <div className="absolute mx-4 rounded-lg">
                <button className="p-2 bg-black text-white shadow-lg">
                  Add +
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ItemList;
