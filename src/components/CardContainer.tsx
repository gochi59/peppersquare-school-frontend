import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Card, Modal } from "react-bootstrap";
import { getEventGroups, getEvents } from "../services/EventService";
import NavigationTiles from "./NavigationTiles";

const CardContainer = () => {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [selectedImage, setSelectedImage] = useState(""); // State to store the selected image URL4
  const [eventGroup,setEventGroup]=useState("");

  useEffect(() => {
    const getAllEvents = async () => {
      try {
        let data;
        if(eventGroup==="")
            data = await getEvents();
        else data=await getEventGroups(eventGroup);
        setEvents(data.data); // Set the events data
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    getAllEvents();
  }, []);

  // Function to handle image click
  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl); // Set the selected image URL
    setShowModal(true); // Show the modal
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setShowModal(false); // Hide the modal
    setSelectedImage(""); // Clear the selected image URL
  };

  
  return (
    <div className="d-flex justify-content-center">
    <NavigationTiles setEventGroup={()=>setEventGroup}/>
      <div className="row row-cols-1 row-cols-md-2 g-4 w-75 m-3 mb-4 pb-3">
        {events.map((event) => (
          <div key={event.id} className="col d-flex justify-content-center">
            <Card className="border shadow-sm rounded-4 w-100">
              {event.image?.length > 0 && (
                <Card.Img
                  src={`http://localhost:1337${event.image[0].url}`} // Use the image URL from the API response
                  className="rounded-top-4"
                  alt={event.title || "Event Image"}
                  onClick={() => handleImageClick(`http://localhost:1337${event.image[0].url}`)} // Open modal on image click
                  style={{ cursor: "pointer" }} // Change cursor to pointer on hover
                />
              )}
              <Card.Body>
                <Card.Title className="text-start">{event.title}</Card.Title>
                <small className="text-muted">
                  <FontAwesomeIcon icon={faCalendar} color="#51bcd2" />{" "}
                  {new Date(event.date).toLocaleDateString()} {/* Format the date */}
                </small>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      {/* Modal for displaying the enlarged image */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Body className="p-0">
          <img
            src={selectedImage}
            alt="Enlarged Event Image"
            style={{ width: "100%", height: "auto" }}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CardContainer;