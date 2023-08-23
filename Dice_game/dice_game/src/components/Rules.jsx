import styled  from "styled-components"

const Rules = () => {
  return (
    <RolesContainer>
        <h2>How to play Dice Game</h2>
        <div className="text">
            <p>Select any Number</p>
            <p>Click On Dice Image</p>

        </div>
    </RolesContainer>
  )
}

export default Rules

const RolesContainer = styled.div`
background-color:#FBf1f2;
padding:20px;
max-width:800px;
margin:0 auto;
margin-top:10px;
`