import { useNavigate } from "react-router-dom";
import NewMeetUpForm from "../components/meetup/newMeetUpForm";

const NewMeetUpPage = () => {
  const navigate = useNavigate();
  async function handleAddNewItem(newItem) {
    await fetch(
      "https://react-project-87f5f-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(newItem),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    navigate("/");
  }
  return (
    <section>
      <h1>Add New MeetUp</h1>
      <NewMeetUpForm onAddItem={handleAddNewItem} />
    </section>
  );
};

export default NewMeetUpPage;
