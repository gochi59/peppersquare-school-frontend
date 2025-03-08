import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Card, Modal } from "react-bootstrap";
import { getEvents } from "../services/EventService";
import NavigationTiles from "./NavigationTiles";

const CardContainer = () => {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false); 
  const [selectedImage, setSelectedImage] = useState(""); 
  const [eventGroup, setEventGroup] = useState("");

  useEffect(() => {
    const getAllEvents = async () => {
      try {
        const response = await getEvents(eventGroup);

        let eventList = [];
        if (response.data.length) {
          const uniqueElements = new Set();
          response.data.forEach((element) => {
            if (
              element.events[0] &&
              !uniqueElements.has(element.events[0].id)
            ) {
              uniqueElements.add(element.events[0].id);
              eventList.push(element.events[0]);
            }
          });

          console.log(eventList);
          setEvents(eventList);
        } else {
          setEvents(response.data.events);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    getAllEvents();
  }, [eventGroup]); 
  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl); 
    setShowModal(true); 
  };

  const handleCloseModal = () => {
    setShowModal(false); 
    setSelectedImage(""); 
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <NavigationTiles setEventGroup={setEventGroup} />
      <div className="row row-cols-1 row-cols-md-2 g-4 w-75 m-3 mb-4 pb-3">
        {events.map((event) => (
          <div key={event.id} className="col d-flex justify-content-center">
            <Card className="border shadow-sm rounded-4 w-100">
              {event.image?.length > 0 && (
                <Card.Img
                  src={`http://localhost:1337${event.image[0].url}`} 
                  className="rounded-top-4"
                  alt={event.title || "Event Image"}
                  onClick={() =>
                    handleImageClick(
                      `http://localhost:1337${event.image[0].url}`
                    )
                  } 
                  style={{ cursor: "pointer" }} 
                />
              )}
              <Card.Body>
                <Card.Title className="text-start">{event.title}</Card.Title>
                <small className="text-muted">
                  <FontAwesomeIcon icon={faCalendar} color="#51bcd2" />{" "}
                  {new Date(event.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}{" "}
                </small>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

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