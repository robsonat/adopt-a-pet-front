import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getInquiries } from '../services/InquiryService.js';
import { useNavigate } from "react-router-dom"

const AppContainer = styled.div`
      width: 100vw;
      height: 100vh;
      background-color: aliceblue;
      display: flex;
      flex-direction: column;
    }
`
function Inquiries() {
  const navigate = useNavigate()
  const [inquiries, setInquiries] = useState([]);

  async function fetchInquiries() {
    const inquiriesDaAPI = await getInquiries()
    setInquiries(inquiriesDaAPI);
  }

  useEffect(() => {
    fetchInquiries()
  }, [])


  const handleAddinquiry = () => {
    navigate("/inquiries/add")
  }

  return (
    <AppContainer>
      <button onClick={() => handleAddinquiry()}>Add Inquiry</button>
      {inquiries.map( inquiry => (
        <section>
          <p>ID: {inquiry._id} </p>
          <p>Pet: {inquiry.pet.name} </p>
          <p>Adopter: {inquiry.adopter.name}</p>
          <hr/> 
        </section>
      ))}
    </AppContainer> 
  );
}

export default Inquiries;
