import { getRandomUser } from "../../Utilities/api";

const GetRandomContact = async () => {
  const responseFromApi = await getRandomUser();
  console.log(responseFromApi);
};

const AddRandomContact = () => {
  return (
    <div>
      <button
        className="btn btn-success form-control"
        onClick={() => GetRandomContact()}
      >
        Add Random Contact
      </button>
    </div>
  );
};

export default AddRandomContact;
