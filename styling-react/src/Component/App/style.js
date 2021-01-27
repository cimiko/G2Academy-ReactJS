import styled from 'styled-components'

export const Container = styled.div`
    text-align: center;

    // padding: ${props => props.padding};

    // ${props => props.addPadding ? "padding: 30px;" : "padding: 0px;"}
    ${props => (props.addPadding && "padding: 30px;")}

    &:hover{
        padding: 40px;
    }
`
export const Header = styled.header`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;

    .App-logo {
        height: 40vmin;
        pointer-events: none;
      }
      
      @media (prefers-reduced-motion: no-preference) {
        .App-logo {
          animation: App-logo-spin infinite 20s linear;
        }
      }
      
      .App-link {
        color: #61dafb;
      }
      
      @keyframes App-logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
`