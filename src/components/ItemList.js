import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items, dummy }) => {
  //console.log("items", items);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item.card?.info?.id}
            className="text-left p-2 m-2 flex justify-between  border-gray-200 border-b-2"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span>{item.card?.info?.name}</span>
                <span> - ₹ {item.card?.info?.price / 100}</span>
              </div>
              {item.card?.info?.description && (
                <p className="text-xs">{item.card.info.description}</p>
              )}
            </div>
            <div className="w-3/12 p-4">
              <div>
                {item.card?.info?.showImage && (
                  <img
                    className="w-40"
                    src={`${CDN_URL}/${item.card?.info?.imageId}`}
                  />
                )}
              </div>

              <div className="absolute mx-4 rounded-lg">
                <button
                  className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
                  onClick={() => handleAddItem(item)}
                >
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
