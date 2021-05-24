import "../../index.css";
import { Link } from "react-router-dom";
import { Col, Row, Container, Button, Card, CardDeck } from "react-bootstrap";
import priority_listing from "../../images/priority_listing.svg";
import savings from "../../images/savings.svg";
import special_offers from "../../images/special_offers.svg";
import checkmark from "../../images/checkmark.svg";
import cross from "../../images/cross.svg";
import cashfaq from "../../images/cash-faq.svg";
import offers_faq from "../../images/offers-faq.svg";
import Fade from "react-reveal/Fade";

function Premium() {
  return (
    <div className="App premiumApp">
      <Container className="premiumHeaderContainer">
        <Row className="premiumHeaderRow">
          <Col lg={5} md={12} sm={12} className="premiumHeaderCol1">
            <div
              className="headerContent"
              style={{
                margin: "auto",
              }}
            >
              <h1 className="premiumTitle">Premium</h1>
              <p className="premiumHeaderPara">
                Get an enhanced Supply Me Now experience. Exclusive benefits,
                free delivery on orders over $12, special offers just for
                members and more.
              </p>
              <Link to="/premium">
                <Button size="lg" className="shadow headerPremiumButton">
                  Go Premium
                </Button>
              </Link>
            </div>
          </Col>
          <Col lg={7} md={12} sm={12} style={{ margin: "auto" }}>
            {/* <svg
              width="120"
              height="100"
              viewBox="0 0 120 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="triangles" clip-path="url(#clip0)">
                <g id="lightGroup">
                  <path
                    id="light1"
                    opacity="0.7"
                    d="M47 46.268C48.3333 47.0378 48.3333 48.9623 47 49.7321L12.5 69.6506C11.1667 70.4204 9.5 69.4582 9.5 67.9186V28.0814C9.5 26.5418 11.1667 25.5796 12.5 26.3494L47 46.268Z"
                  />
                </g>
                <g id="darkGroup">
                  <path
                    id="light2"
                    d="M47 46.268C48.3333 47.0378 48.3333 48.9623 47 49.7321L12.5 69.6506C11.1667 70.4204 9.5 69.4582 9.5 67.9186V28.0814C9.5 26.5418 11.1667 25.5796 12.5 26.3494L47 46.268Z"
                    fillOpacity="0.7"
                  />
                  <path
                    id="dark1"
                    d="M67 46.268C68.3333 47.0378 68.3333 48.9623 67 49.7321L32.5 69.6506C31.1667 70.4204 29.5 69.4582 29.5 67.9186V28.0814C29.5 26.5418 31.1667 25.5796 32.5 26.3494L67 46.268Z"
                    fillOpacity="0.7"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="120" height="100" fill="white" />
                </clipPath>
              </defs>
            </svg> */}
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 300 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="cardsPremium">
                <g id="cardRight" filter="url(#filter0_d)">
                  <rect
                    x="193"
                    y="44"
                    width="50"
                    height="100"
                    rx="2"
                    fill="white"
                  />
                </g>
                <g id="cardMiddle" filter="url(#filter1_d)">
                  <rect
                    x="125"
                    y="32"
                    width="64"
                    height="125"
                    rx="2"
                    fill="white"
                  />
                </g>
                <g id="cardLeft" filter="url(#filter2_d)">
                  <path
                    d="M71 46C71 44.8954 71.8954 44 73 44H119C120.105 44 121 44.8954 121 46V142C121 143.105 120.105 144 119 144H73C71.8954 144 71 143.105 71 142V46Z"
                    fill="white"
                  />
                </g>
                <g id="skeletonMiddle">
                  <path
                    id="perk6"
                    d="M137 138C137 137.448 137.448 137 138 137H176C176.552 137 177 137.448 177 138V143C177 143.552 176.552 144 176 144H138C137.448 144 137 143.552 137 143V138Z"
                    fill="#EAAFC8"
                  />
                  <path
                    id="perk5"
                    d="M137 123C137 122.448 137.448 122 138 122H176C176.552 122 177 122.448 177 123V128C177 128.552 176.552 129 176 129H138C137.448 129 137 128.552 137 128V123Z"
                    fill="#EAAFC8"
                  />
                  <path
                    id="perk4"
                    d="M137 108C137 107.448 137.448 107 138 107H176C176.552 107 177 107.448 177 108V113C177 113.552 176.552 114 176 114H138C137.448 114 137 113.552 137 113V108Z"
                    fill="#EAAFC8"
                  />
                  <path
                    id="perk3"
                    d="M137 93C137 92.4477 137.448 92 138 92H176C176.552 92 177 92.4477 177 93V98C177 98.5523 176.552 99 176 99H138C137.448 99 137 98.5523 137 98V93Z"
                    fill="#EAAFC8"
                  />
                  <path
                    id="perk2"
                    d="M137 78C137 77.4477 137.448 77 138 77H176C176.552 77 177 77.4477 177 78V83C177 83.5523 176.552 84 176 84H138C137.448 84 137 83.5523 137 83V78Z"
                    fill="#EAAFC8"
                  />
                  <path
                    id="perk1"
                    d="M137 63C137 62.4477 137.448 62 138 62H176C176.552 62 177 62.4477 177 63V68C177 68.5523 176.552 69 176 69H138C137.448 69 137 68.5523 137 68V63Z"
                    fill="#EAAFC8"
                  />
                  <rect
                    id="title"
                    x="143"
                    y="41"
                    width="28"
                    height="7"
                    rx="1"
                    fill="#EAAFC8"
                  />
                </g>
                <g id="skeletonLeft">
                  <path
                    id="perk6_2"
                    d="M81 130C81 129.448 81.4477 129 82 129H110C110.552 129 111 129.448 111 130V134C111 134.552 110.552 135 110 135H82C81.4477 135 81 134.552 81 134V130Z"
                    fill="#EAAFC8"
                  />
                  <path
                    id="perk5_2"
                    d="M81 118C81 117.448 81.4477 117 82 117H110C110.552 117 111 117.448 111 118V122C111 122.552 110.552 123 110 123H82C81.4477 123 81 122.552 81 122V118Z"
                    fill="#EAAFC8"
                  />
                  <path
                    id="perk4_2"
                    d="M81 106C81 105.448 81.4477 105 82 105H110C110.552 105 111 105.448 111 106V110C111 110.552 110.552 111 110 111H82C81.4477 111 81 110.552 81 110V106Z"
                    fill="#EAAFC8"
                  />
                  <path
                    id="perk3_2"
                    d="M81 94C81 93.4477 81.4477 93 82 93H110C110.552 93 111 93.4477 111 94V98C111 98.5523 110.552 99 110 99H82C81.4477 99 81 98.5523 81 98V94Z"
                    fill="#EAAFC8"
                  />
                  <path
                    id="perk2_2"
                    d="M81 82C81 81.4477 81.4477 81 82 81H110C110.552 81 111 81.4477 111 82V86C111 86.5523 110.552 87 110 87H82C81.4477 87 81 86.5523 81 86V82Z"
                    fill="#EAAFC8"
                  />
                  <path
                    id="perk1_2"
                    d="M81 70C81 69.4477 81.4477 69 82 69H110C110.552 69 111 69.4477 111 70V74C111 74.5523 110.552 75 110 75H82C81.4477 75 81 74.5523 81 74V70Z"
                    fill="#EAAFC8"
                  />
                  <path
                    id="title_2"
                    d="M85 54C85 53.4477 85.4477 53 86 53H105C105.552 53 106 53.4477 106 54V59C106 59.5523 105.552 60 105 60H86C85.4477 60 85 59.5523 85 59V54Z"
                    fill="#EAAFC8"
                  />
                </g>
                <g id="skeletonRight">
                  <path
                    id="perk6_3"
                    d="M203 130C203 129.448 203.448 129 204 129H232C232.552 129 233 129.448 233 130V134C233 134.552 232.552 135 232 135H204C203.448 135 203 134.552 203 134V130Z"
                    fill="#EAAFC8"
                  />
                  <path
                    id="perk5_3"
                    d="M203 118C203 117.448 203.448 117 204 117H232C232.552 117 233 117.448 233 118V122C233 122.552 232.552 123 232 123H204C203.448 123 203 122.552 203 122V118Z"
                    fill="#EAAFC8"
                  />
                  <path
                    id="perk4_3"
                    d="M203 106C203 105.448 203.448 105 204 105H232C232.552 105 233 105.448 233 106V110C233 110.552 232.552 111 232 111H204C203.448 111 203 110.552 203 110V106Z"
                    fill="#EAAFC8"
                  />
                  <path
                    id="perk3_3"
                    d="M203 94C203 93.4477 203.448 93 204 93H232C232.552 93 233 93.4477 233 94V98C233 98.5523 232.552 99 232 99H204C203.448 99 203 98.5523 203 98V94Z"
                    fill="#EAAFC8"
                  />
                  <path
                    id="perk2_3"
                    d="M203 82C203 81.4477 203.448 81 204 81H232C232.552 81 233 81.4477 233 82V86C233 86.5523 232.552 87 232 87H204C203.448 87 203 86.5523 203 86V82Z"
                    fill="#EAAFC8"
                  />
                  <path
                    id="perk1_3"
                    d="M203 70C203 69.4477 203.448 69 204 69H232C232.552 69 233 69.4477 233 70V74C233 74.5523 232.552 75 232 75H204C203.448 75 203 74.5523 203 74V70Z"
                    fill="#EAAFC8"
                  />
                  <path
                    id="title_3"
                    d="M207 54C207 53.4477 207.448 53 208 53H227C227.552 53 228 53.4477 228 54V59C228 59.5523 227.552 60 227 60H208C207.448 60 207 59.5523 207 59V54Z"
                    fill="#EAAFC8"
                  />
                </g>
                <g id="checkGroup3">
                  <path
                    id="check5"
                    d="M233.5 113C231.567 113 230 114.567 230 116.5C230 118.433 231.567 120 233.5 120C235.433 120 237 118.433 237 116.5C237 114.567 235.433 113 233.5 113ZM235.012 115.357L233.366 117.638C233.343 117.67 233.313 117.697 233.278 117.715C233.243 117.733 233.204 117.742 233.164 117.742C233.125 117.742 233.086 117.733 233.051 117.715C233.016 117.697 232.985 117.67 232.963 117.638L231.988 116.288C231.959 116.247 231.988 116.189 232.039 116.189H232.405C232.485 116.189 232.561 116.227 232.608 116.293L233.164 117.065L234.392 115.362C234.439 115.297 234.514 115.258 234.595 115.258H234.961C235.012 115.258 235.041 115.316 235.012 115.357V115.357Z"
                    fill="#654EA3"
                  />
                  <path
                    id="check4"
                    d="M233.5 101C231.567 101 230 102.567 230 104.5C230 106.433 231.567 108 233.5 108C235.433 108 237 106.433 237 104.5C237 102.567 235.433 101 233.5 101ZM235.012 103.357L233.366 105.638C233.343 105.67 233.313 105.697 233.278 105.715C233.243 105.733 233.204 105.742 233.164 105.742C233.125 105.742 233.086 105.733 233.051 105.715C233.016 105.697 232.985 105.67 232.963 105.638L231.988 104.288C231.959 104.247 231.988 104.189 232.039 104.189H232.405C232.485 104.189 232.561 104.227 232.608 104.293L233.164 105.065L234.392 103.362C234.439 103.297 234.514 103.258 234.595 103.258H234.961C235.012 103.258 235.041 103.316 235.012 103.357V103.357Z"
                    fill="#654EA3"
                  />
                  <path
                    id="check3"
                    d="M233.5 89C231.567 89 230 90.5672 230 92.5C230 94.4328 231.567 96 233.5 96C235.433 96 237 94.4328 237 92.5C237 90.5672 235.433 89 233.5 89ZM235.012 91.357L233.366 93.6383C233.343 93.6704 233.313 93.6965 233.278 93.7146C233.243 93.7326 233.204 93.742 233.164 93.742C233.125 93.742 233.086 93.7326 233.051 93.7146C233.016 93.6965 232.985 93.6704 232.963 93.6383L231.988 92.2883C231.959 92.2469 231.988 92.1891 232.039 92.1891H232.405C232.485 92.1891 232.561 92.2273 232.608 92.293L233.164 93.0648L234.392 91.3617C234.439 91.2969 234.514 91.2578 234.595 91.2578H234.961C235.012 91.2578 235.041 91.3156 235.012 91.357V91.357Z"
                    fill="#654EA3"
                  />
                  <path
                    id="check2"
                    d="M233.5 77C231.567 77 230 78.5672 230 80.5C230 82.4328 231.567 84 233.5 84C235.433 84 237 82.4328 237 80.5C237 78.5672 235.433 77 233.5 77ZM235.012 79.357L233.366 81.6383C233.343 81.6704 233.313 81.6965 233.278 81.7146C233.243 81.7326 233.204 81.742 233.164 81.742C233.125 81.742 233.086 81.7326 233.051 81.7146C233.016 81.6965 232.985 81.6704 232.963 81.6383L231.988 80.2883C231.959 80.2469 231.988 80.1891 232.039 80.1891H232.405C232.485 80.1891 232.561 80.2273 232.608 80.293L233.164 81.0648L234.392 79.3617C234.439 79.2969 234.514 79.2578 234.595 79.2578H234.961C235.012 79.2578 235.041 79.3156 235.012 79.357V79.357Z"
                    fill="#654EA3"
                  />
                  <path
                    id="check1"
                    d="M233.5 65C231.567 65 230 66.5672 230 68.5C230 70.4328 231.567 72 233.5 72C235.433 72 237 70.4328 237 68.5C237 66.5672 235.433 65 233.5 65ZM235.012 67.357L233.366 69.6383C233.343 69.6704 233.313 69.6965 233.278 69.7146C233.243 69.7326 233.204 69.742 233.164 69.742C233.125 69.742 233.086 69.7326 233.051 69.7146C233.016 69.6965 232.985 69.6704 232.963 69.6383L231.988 68.2883C231.959 68.2469 231.988 68.1891 232.039 68.1891H232.405C232.485 68.1891 232.561 68.2273 232.608 68.293L233.164 69.0648L234.392 67.3617C234.439 67.2969 234.514 67.2578 234.595 67.2578H234.961C235.012 67.2578 235.041 67.3156 235.012 67.357V67.357Z"
                    fill="#654EA3"
                  />
                </g>
                <g id="checkGroup2">
                  <path
                    id="check6"
                    d="M177.5 133C175.567 133 174 134.567 174 136.5C174 138.433 175.567 140 177.5 140C179.433 140 181 138.433 181 136.5C181 134.567 179.433 133 177.5 133ZM179.012 135.357L177.366 137.638C177.343 137.67 177.313 137.697 177.278 137.715C177.243 137.733 177.204 137.742 177.164 137.742C177.125 137.742 177.086 137.733 177.051 137.715C177.016 137.697 176.985 137.67 176.963 137.638L175.988 136.288C175.959 136.247 175.988 136.189 176.039 136.189H176.405C176.485 136.189 176.561 136.227 176.608 136.293L177.164 137.065L178.392 135.362C178.439 135.297 178.514 135.258 178.595 135.258H178.961C179.012 135.258 179.041 135.316 179.012 135.357V135.357Z"
                    fill="#654EA3"
                  />
                  <path
                    id="check5_2"
                    d="M177.5 118C175.567 118 174 119.567 174 121.5C174 123.433 175.567 125 177.5 125C179.433 125 181 123.433 181 121.5C181 119.567 179.433 118 177.5 118ZM179.012 120.357L177.366 122.638C177.343 122.67 177.313 122.697 177.278 122.715C177.243 122.733 177.204 122.742 177.164 122.742C177.125 122.742 177.086 122.733 177.051 122.715C177.016 122.697 176.985 122.67 176.963 122.638L175.988 121.288C175.959 121.247 175.988 121.189 176.039 121.189H176.405C176.485 121.189 176.561 121.227 176.608 121.293L177.164 122.065L178.392 120.362C178.439 120.297 178.514 120.258 178.595 120.258H178.961C179.012 120.258 179.041 120.316 179.012 120.357V120.357Z"
                    fill="#654EA3"
                  />
                  <path
                    id="check4_2"
                    d="M177.5 103C175.567 103 174 104.567 174 106.5C174 108.433 175.567 110 177.5 110C179.433 110 181 108.433 181 106.5C181 104.567 179.433 103 177.5 103ZM179.012 105.357L177.366 107.638C177.343 107.67 177.313 107.697 177.278 107.715C177.243 107.733 177.204 107.742 177.164 107.742C177.125 107.742 177.086 107.733 177.051 107.715C177.016 107.697 176.985 107.67 176.963 107.638L175.988 106.288C175.959 106.247 175.988 106.189 176.039 106.189H176.405C176.485 106.189 176.561 106.227 176.608 106.293L177.164 107.065L178.392 105.362C178.439 105.297 178.514 105.258 178.595 105.258H178.961C179.012 105.258 179.041 105.316 179.012 105.357V105.357Z"
                    fill="#654EA3"
                  />
                  <path
                    id="check3_2"
                    d="M177.5 88C175.567 88 174 89.5672 174 91.5C174 93.4328 175.567 95 177.5 95C179.433 95 181 93.4328 181 91.5C181 89.5672 179.433 88 177.5 88ZM179.012 90.357L177.366 92.6383C177.343 92.6704 177.313 92.6965 177.278 92.7146C177.243 92.7326 177.204 92.742 177.164 92.742C177.125 92.742 177.086 92.7326 177.051 92.7146C177.016 92.6965 176.985 92.6704 176.963 92.6383L175.988 91.2883C175.959 91.2469 175.988 91.1891 176.039 91.1891H176.405C176.485 91.1891 176.561 91.2273 176.608 91.293L177.164 92.0648L178.392 90.3617C178.439 90.2969 178.514 90.2578 178.595 90.2578H178.961C179.012 90.2578 179.041 90.3156 179.012 90.357V90.357Z"
                    fill="#654EA3"
                  />
                  <path
                    id="check2_2"
                    d="M177.5 73C175.567 73 174 74.5672 174 76.5C174 78.4328 175.567 80 177.5 80C179.433 80 181 78.4328 181 76.5C181 74.5672 179.433 73 177.5 73ZM179.012 75.357L177.366 77.6383C177.343 77.6704 177.313 77.6965 177.278 77.7146C177.243 77.7326 177.204 77.742 177.164 77.742C177.125 77.742 177.086 77.7326 177.051 77.7146C177.016 77.6965 176.985 77.6704 176.963 77.6383L175.988 76.2883C175.959 76.2469 175.988 76.1891 176.039 76.1891H176.405C176.485 76.1891 176.561 76.2273 176.608 76.293L177.164 77.0648L178.392 75.3617C178.439 75.2969 178.514 75.2578 178.595 75.2578H178.961C179.012 75.2578 179.041 75.3156 179.012 75.357V75.357Z"
                    fill="#654EA3"
                  />
                  <path
                    id="check1_2"
                    d="M177.5 58C175.567 58 174 59.5672 174 61.5C174 63.4328 175.567 65 177.5 65C179.433 65 181 63.4328 181 61.5C181 59.5672 179.433 58 177.5 58ZM179.012 60.357L177.366 62.6383C177.343 62.6704 177.313 62.6965 177.278 62.7146C177.243 62.7326 177.204 62.742 177.164 62.742C177.125 62.742 177.086 62.7326 177.051 62.7146C177.016 62.6965 176.985 62.6704 176.963 62.6383L175.988 61.2883C175.959 61.2469 175.988 61.1891 176.039 61.1891H176.405C176.485 61.1891 176.561 61.2273 176.608 61.293L177.164 62.0648L178.392 60.3617C178.439 60.2969 178.514 60.2578 178.595 60.2578H178.961C179.012 60.2578 179.041 60.3156 179.012 60.357V60.357Z"
                    fill="#654EA3"
                  />
                </g>
                <g id="checkGroup1">
                  <path
                    id="check3_3"
                    d="M111.5 89C109.567 89 108 90.5672 108 92.5C108 94.4328 109.567 96 111.5 96C113.433 96 115 94.4328 115 92.5C115 90.5672 113.433 89 111.5 89ZM113.012 91.357L111.366 93.6383C111.343 93.6704 111.313 93.6965 111.278 93.7146C111.243 93.7326 111.204 93.742 111.164 93.742C111.125 93.742 111.086 93.7326 111.051 93.7146C111.016 93.6965 110.985 93.6704 110.963 93.6383L109.988 92.2883C109.959 92.2469 109.988 92.1891 110.039 92.1891H110.405C110.485 92.1891 110.561 92.2273 110.608 92.293L111.164 93.0648L112.392 91.3617C112.439 91.2969 112.514 91.2578 112.595 91.2578H112.961C113.012 91.2578 113.041 91.3156 113.012 91.357V91.357Z"
                    fill="#654EA3"
                  />
                  <path
                    id="check2_3"
                    d="M111.5 77C109.567 77 108 78.5672 108 80.5C108 82.4328 109.567 84 111.5 84C113.433 84 115 82.4328 115 80.5C115 78.5672 113.433 77 111.5 77ZM113.012 79.357L111.366 81.6383C111.343 81.6704 111.313 81.6965 111.278 81.7146C111.243 81.7326 111.204 81.742 111.164 81.742C111.125 81.742 111.086 81.7326 111.051 81.7146C111.016 81.6965 110.985 81.6704 110.963 81.6383L109.988 80.2883C109.959 80.2469 109.988 80.1891 110.039 80.1891H110.405C110.485 80.1891 110.561 80.2273 110.608 80.293L111.164 81.0648L112.392 79.3617C112.439 79.2969 112.514 79.2578 112.595 79.2578H112.961C113.012 79.2578 113.041 79.3156 113.012 79.357V79.357Z"
                    fill="#654EA3"
                  />
                  <path
                    id="check1_3"
                    d="M111.5 65C109.567 65 108 66.5672 108 68.5C108 70.4328 109.567 72 111.5 72C113.433 72 115 70.4328 115 68.5C115 66.5672 113.433 65 111.5 65ZM113.012 67.357L111.366 69.6383C111.343 69.6704 111.313 69.6965 111.278 69.7146C111.243 69.7326 111.204 69.742 111.164 69.742C111.125 69.742 111.086 69.7326 111.051 69.7146C111.016 69.6965 110.985 69.6704 110.963 69.6383L109.988 68.2883C109.959 68.2469 109.988 68.1891 110.039 68.1891H110.405C110.485 68.1891 110.561 68.2273 110.608 68.293L111.164 69.0648L112.392 67.3617C112.439 67.2969 112.514 67.2578 112.595 67.2578H112.961C113.012 67.2578 113.041 67.3156 113.012 67.357V67.357Z"
                    fill="#654EA3"
                  />
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_d"
                  x="189"
                  y="44"
                  width="58"
                  height="108"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter1_d"
                  x="121"
                  y="32"
                  width="72"
                  height="133"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter2_d"
                  x="67"
                  y="44"
                  width="58"
                  height="108"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </Col>
        </Row>
      </Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,256L80,266.7C160,277,320,299,480,277.3C640,256,800,192,960,176C1120,160,1280,192,1360,208L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      {/* Same day section */}
      <Container className="whats-included-container">
        <Container style={{ color: "black", textAlign: "left" }}>
          <Fade bottom>
            <Row>
              <Col>
                <h1 className="whats-included-heading">What's Included?</h1>
              </Col>
            </Row>
            <Row className="whats-included-row">
              <Col lg={4} md={4} sm={12} xs={12}>
                <div className="whats-included-col1">
                  <img
                    className="whats-included-img1"
                    src={priority_listing}
                    alt="Priority Listing"
                    style={{ marginBottom: "2rem" }}
                  />
                  <h3>Priority Listing</h3>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Hic, animi? Officiis quasi aperiam quisquam mollitia ratione
                    officia eligendi est
                  </p>
                </div>
              </Col>
              <Col lg={4} md={4} sm={12} xs={12}>
                <div className="whats-included-col2">
                  <img
                    className="whats-included-img2"
                    src={savings}
                    alt="Reduced Fees"
                    style={{ marginBottom: "2rem" }}
                  />
                  <h3>Reduced Fees</h3>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Hic, animi? Officiis quasi aperiam quisquam mollitia ratione
                    officia eligendi est
                  </p>
                </div>
              </Col>
              <Col lg={4} md={4} sm={12} xs={12}>
                <div className="whats-included-col3">
                  <img
                    className="whats-included-img3"
                    src={special_offers}
                    alt="Special Offers"
                    style={{ marginBottom: "2rem" }}
                  />
                  <h3>Special Offers</h3>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Hic, animi? Officiis quasi aperiam quisquam mollitia ratione
                    officia eligendi est
                  </p>
                </div>
              </Col>
            </Row>
          </Fade>
          <Fade bottom>
            <Row style={{ marginBottom: "30px" }}>
              <Col lg={12} md={12} sm={12} style={{ margin: "auto" }}>
                <h1 className="offerHeader">Premium Plans</h1>
                <p className="offerPara">
                  Unlimited free delivery. Special offers just for members.
                  Access to exclusive giveaways and events.
                </p>
              </Col>
            </Row>
            <Row>
              <CardDeck className="cardDeck" style={{ color: "black" }}>
                <Col
                  lg={{ span: 4, order: 3 }}
                  md={{ span: 6, order: 3 }}
                  sm={{ span: 12 }}
                  style={{ margin: "auto" }}
                >
                  <Card
                    style={{ backgroundColor: "#ffffff" }}
                    className="shadow cardsHome cardLeft"
                  >
                    <Card.Body className="premium-card-body">
                      <Card.Title>Basic</Card.Title>
                      <Card.Text>
                        <span className="premiumPrice">$5.99</span>
                        <span className="text-muted">/month</span>
                      </Card.Text>

                      <Button size="md" className="shadow plan-button">
                        Subscribe
                      </Button>

                      <div style={{ textAlign: "left" }}>
                        <Card.Text>
                          <img
                            width={16}
                            height={16}
                            className="mr-3"
                            src={checkmark}
                            alt="checkmark"
                          />
                          Virtual badge
                        </Card.Text>
                        <Card.Text>
                          <img
                            width={16}
                            height={16}
                            className="mr-3"
                            src={checkmark}
                            alt="checkmark"
                          />
                          Reduced fees
                        </Card.Text>
                        <Card.Text>
                          <img
                            width={16}
                            height={16}
                            className="mr-3"
                            src={checkmark}
                            alt="checkmark"
                          />
                          Exclusive Discounts
                        </Card.Text>
                        <Card.Text>
                          <img
                            width={16}
                            height={16}
                            className="mr-3"
                            src={cross}
                            alt="cross"
                          />
                          <span className="text-muted">
                            24/7 premium support
                          </span>
                        </Card.Text>
                        <Card.Text>
                          <img
                            width={16}
                            height={16}
                            className="mr-3"
                            src={cross}
                            alt="cross"
                          />
                          <span className="text-muted">Special offers</span>
                        </Card.Text>
                        <Card.Text>
                          <img
                            width={16}
                            height={16}
                            className="mr-3"
                            src={cross}
                            alt="cross"
                          />
                          <span className="text-muted">Priority listing</span>
                        </Card.Text>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col
                  lg={{ span: 4, order: 3 }}
                  md={{ span: 6, order: 3 }}
                  sm={{ span: 12 }}
                  style={{ margin: "auto" }}
                >
                  <Card
                    style={{ backgroundColor: "#ffffff" }}
                    className="shadow cardsHome cardMiddle"
                  >
                    <div className="ribbon ribbon-top-right">
                      <span>best value</span>
                    </div>
                    <Card.Body className="premium-card-body">
                      <Card.Title>Plus</Card.Title>
                      <Card.Text>
                        <span className="premiumPrice">$19.99</span>
                        <span className="text-muted">/month</span>
                      </Card.Text>
                      <Button size="md" className="shadow plan-button">
                        Subscribe
                      </Button>
                      <div style={{ textAlign: "left" }}>
                        <Card.Text>
                          <img
                            width={16}
                            height={16}
                            className="mr-3"
                            src={checkmark}
                            alt="checkmark"
                          />
                          Virtual badge
                        </Card.Text>
                        <Card.Text>
                          <img
                            width={16}
                            height={16}
                            className="mr-3"
                            src={checkmark}
                            alt="checkmark"
                          />
                          Reduced fees
                        </Card.Text>
                        <Card.Text>
                          <img
                            width={16}
                            height={16}
                            className="mr-3"
                            src={checkmark}
                            alt="checkmark"
                          />
                          Exclusive Discounts
                        </Card.Text>
                        <Card.Text>
                          <img
                            width={16}
                            height={16}
                            className="mr-3"
                            src={checkmark}
                            alt="checkmark"
                          />
                          24/7 premium support
                        </Card.Text>
                        <Card.Text>
                          <img
                            width={16}
                            height={16}
                            className="mr-3"
                            src={checkmark}
                            alt="checkmark"
                          />
                          Special offers
                        </Card.Text>
                        <Card.Text>
                          <img
                            width={16}
                            height={16}
                            className="mr-3"
                            src={checkmark}
                            alt="checkmark"
                          />
                          <span>Priority listing</span>
                        </Card.Text>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col
                  lg={{ span: 4, order: 3 }}
                  md={{ span: 6, order: 2 }}
                  sm={{ span: 12 }}
                  style={{ margin: "auto" }}
                >
                  <Card
                    style={{ backgroundColor: "#ffffff" }}
                    className="shadow cardsHome cardRight"
                  >
                    <Card.Body className="premium-card-body">
                      <Card.Title>Standard</Card.Title>
                      <Card.Text>
                        <span className="premiumPrice">$11.99</span>
                        <span className="text-muted">/month</span>
                      </Card.Text>
                      <Button size="md" className="shadow plan-button">
                        Subscribe
                      </Button>
                      <div style={{ textAlign: "left" }}>
                        <Card.Text>
                          <img
                            width={16}
                            height={16}
                            className="mr-3"
                            src={checkmark}
                            alt="checkmark"
                          />
                          Virtual badge
                        </Card.Text>
                        <Card.Text>
                          <img
                            width={16}
                            height={16}
                            className="mr-3"
                            src={checkmark}
                            alt="checkmark"
                          />
                          Reduced fees
                        </Card.Text>
                        <Card.Text>
                          <img
                            width={16}
                            height={16}
                            className="mr-3"
                            src={checkmark}
                            alt="checkmark"
                          />
                          Exclusive Discounts
                        </Card.Text>
                        <Card.Text>
                          <img
                            width={16}
                            height={16}
                            className="mr-3"
                            src={checkmark}
                            alt="checkmark"
                          />
                          24/7 premium support
                        </Card.Text>
                        <Card.Text>
                          <img
                            width={16}
                            height={16}
                            className="mr-3"
                            src={checkmark}
                            alt="checkmark"
                          />
                          Special offers
                        </Card.Text>
                        <Card.Text>
                          <img
                            width={16}
                            height={16}
                            className="mr-3"
                            src={cross}
                            alt="cross"
                          />
                          <span className="text-muted">Priority listing</span>
                        </Card.Text>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </CardDeck>
            </Row>
          </Fade>
        </Container>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
          <path
            fill="#eaafc8"
            fillOpacity="1"
            d="M0,256L80,266.7C160,277,320,299,480,277.3C640,256,800,192,960,176C1120,160,1280,192,1360,208L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </Container>

      <Container className="offerContainer premiumContainer">
        <Container>
          <Fade bottom>
            <Row>
              <Col lg={12} md={12} sm={12} style={{ margin: "auto" }}>
                <h1 className="faq-header">FAQS</h1>
              </Col>
            </Row>
            <Row>
              <CardDeck className="faq-cards">
                <Col
                  className="card-fee-faq-col"
                  lg={{ span: 4 }}
                  md={{ span: 6 }}
                  sm={{ span: 12 }}
                >
                  <Card className="hvr-float shadow card-fee-faq">
                    <Card.Body>
                      <Card.Title>
                        What is the requirement for no delievery fees?
                      </Card.Title>
                      <Card.Text>
                        To qualify for no delivery fees on your delivery, your
                        purchase must be $12 or more at checkout.
                      </Card.Text>
                      <img src={cashfaq} alt="checkmark" />
                    </Card.Body>
                  </Card>
                </Col>
                <Col
                  className="card-priority-faq-col"
                  lg={{ span: 4 }}
                  md={{ span: 6 }}
                  sm={{ span: 12 }}
                >
                  <Card className="hvr-float shadow card-priority-faq">
                    <Card.Body>
                      <Card.Title>How does priority listing work?</Card.Title>
                      <Card.Text>
                        When a Premium member requests a delivery, your listing
                        will display on top skipping the virtual line!
                      </Card.Text>
                      <svg
                        width="200"
                        height="200"
                        viewBox="0 0 200 200"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="priority-faq">
                          <g id="bar-faq-g">
                            <rect
                              id="bar-3"
                              x="120"
                              y="55"
                              width="20"
                              height="100"
                              rx="2"
                              fill="#6C63FF"
                            />
                            <rect
                              id="bar-2"
                              x="79.5"
                              y="79.5"
                              width="21"
                              height="76"
                              rx="2.5"
                              fill="white"
                              stroke="black"
                            />
                            <rect
                              id="bar-1"
                              x="40"
                              y="105"
                              width="20"
                              height="50"
                              rx="2"
                              fill="#6C63FF"
                            />
                          </g>
                          <path
                            id="bar-filling"
                            d="M80.4847 153.857C85.0841 153.857 89.6781 153.569 94.2785 153.569C94.6177 153.569 95.8305 153.569 94.7894 153.569C93.2976 153.569 91.8057 153.569 90.3139 153.569C87.5164 153.569 79.1268 153.671 81.9215 153.548C84.4242 153.438 86.9314 153.474 89.4358 153.474C92.0791 153.474 94.7123 153.282 97.3545 153.282C97.8763 153.282 99.4061 153.143 98.9191 153.33C98.5409 153.475 97.9442 153.378 97.5514 153.378C95.2489 153.378 92.9507 153.43 90.6491 153.495C88.751 153.548 86.8581 153.562 84.9655 153.718C84.9545 153.719 83.8511 153.77 83.8586 153.74C83.9036 153.56 85.8223 153.665 85.9181 153.665C90.4922 153.665 95.0407 153.214 99.6109 153.091C103.078 152.997 92.6749 153.091 89.2069 153.091C87.3844 153.091 85.5526 153.145 83.7309 153.085C83.5229 153.078 82.9994 153.057 83.1349 152.899C83.4089 152.579 84.6977 152.675 85.0028 152.659C89.1944 152.448 101.764 151.795 97.5673 151.845C93.3308 151.896 89.0922 152.076 84.8538 152.127C83.9971 152.138 83.1401 152.133 82.2834 152.133C82.2255 152.133 81.296 152.11 81.3893 152.069C82.1851 151.719 83.292 151.726 84.1247 151.654C86.63 151.436 89.1424 151.321 91.6496 151.132C93.0907 151.023 94.5266 150.876 95.9708 150.813C96.3055 150.798 97.2974 150.794 96.9713 150.717C96.56 150.62 96.0452 150.696 95.6302 150.696C94.4891 150.696 93.3586 150.725 92.219 150.792C89.8874 150.927 87.5352 151.04 85.1997 151.074C84.5222 151.083 83.8444 151.079 83.1668 151.079C82.8519 151.079 82.7523 151.106 83.1242 151.015C85.2583 150.492 87.5745 150.536 89.7551 150.334C91.4643 150.175 93.1742 150.015 94.8852 149.876C95.6265 149.816 95.9811 149.793 96.6946 149.759C96.9841 149.745 97.4605 149.795 97.7536 149.69C97.7575 149.689 97.2196 149.642 97.1895 149.642C96.4179 149.642 95.6461 149.636 94.8746 149.647C92.3249 149.684 89.7815 149.914 87.2326 149.929C86.2925 149.935 85.3522 149.929 84.4121 149.929C84.1601 149.929 83.4712 150.079 83.6564 149.908C83.9505 149.637 84.7794 149.547 85.1145 149.493C86.625 149.248 88.1691 149.233 89.6912 149.099C92.1372 148.884 94.6513 148.803 97.0778 148.418C98.2744 148.228 94.653 148.386 93.443 148.45C90.9784 148.58 88.5092 148.609 86.0458 148.743C85.0457 148.797 84.0505 148.919 83.0497 148.961C82.5861 148.98 81.9791 148.968 82.8049 148.759C85.6968 148.027 88.8726 148.051 91.8305 147.801C93.2743 147.679 94.7149 147.532 96.1624 147.46C96.4378 147.446 97.2553 147.385 96.982 147.348C95.9653 147.213 94.844 147.343 93.8209 147.343C91.7024 147.343 89.6048 147.61 87.488 147.63C87.0226 147.635 85.6684 147.516 86.0937 147.705C86.4247 147.852 87.3784 147.464 87.7009 147.407C90.7352 146.871 93.8264 146.606 96.8755 146.156C97.3441 146.087 98.7462 145.961 98.2751 145.912C97.7501 145.856 97.1885 145.906 96.6627 145.906C93.6739 145.906 90.6986 146.049 87.7115 146.119C85.6191 146.168 83.5252 146.221 81.4319 146.194C80.1678 146.177 83.8908 145.574 85.1465 145.427C88.5781 145.025 92.0119 144.644 95.444 144.246C95.9682 144.185 97.547 144.086 97.0192 144.086C96.4756 144.086 95.9335 144.108 95.3908 144.139C93.2738 144.263 91.1594 144.318 89.0473 144.517C87.0045 144.71 84.8966 144.637 82.8688 144.927C82.228 145.019 84.1511 144.747 84.7952 144.682C87.8019 144.382 90.8047 144.138 93.8102 143.799C95.0243 143.662 96.2742 143.588 97.4716 143.331C98.0773 143.2 97.3557 143.224 97.2587 143.224C95.0532 143.224 92.883 143.443 90.6917 143.66C88.4705 143.881 86.2355 143.87 84.0076 143.969C83.7524 143.98 82.9955 144.038 83.2413 143.969C84.0126 143.752 84.8367 143.636 85.6254 143.506C88.792 142.986 91.9648 142.507 95.146 142.085C95.8242 141.995 96.5629 141.954 97.2214 141.75C97.4654 141.674 96.7528 141.691 96.7265 141.691C92.3993 141.731 88.068 142.168 83.7469 142.362C83.3952 142.378 83.0354 142.389 82.6878 142.452C82.425 142.5 83.2137 142.357 83.4755 142.303C86.145 141.758 88.9145 141.625 91.6177 141.308C92.9276 141.155 96.8639 140.829 95.5451 140.829C93.8215 140.829 92.1007 140.921 90.383 141.063C87.9018 141.27 85.4023 141.467 82.9114 141.5C82.7588 141.502 82.6059 141.511 82.4537 141.5C82.4022 141.496 82.5523 141.468 82.6027 141.457C83.594 141.237 84.5986 141.11 85.6041 140.973C88.486 140.581 91.3574 140.21 94.2572 139.973C95.0394 139.908 95.8213 139.837 96.6041 139.781C96.6856 139.775 95.6352 139.79 95.46 139.797C91.0608 139.977 86.6743 140.542 82.2674 140.542C81.1514 140.542 84.4578 140.097 85.5669 139.973C88.2048 139.675 90.8491 139.471 93.4803 139.105C93.9281 139.043 94.3987 139.002 94.8426 138.913C95.1453 138.853 94.2253 138.91 93.9167 138.913C91.4064 138.945 88.8764 139.142 86.3705 139.291C84.0083 139.432 81.6423 139.349 79.2819 139.531C78.2355 139.611 79.3856 139.505 79.5959 139.483C81.2476 139.309 82.9067 139.227 84.5611 139.084C88.5475 138.739 92.5365 138.342 96.5137 137.902C96.8491 137.865 97.8381 137.734 97.5035 137.689C96.6885 137.582 95.8104 137.668 94.9916 137.668C90.1134 137.668 85.2334 137.764 80.3569 137.764C78.5065 137.764 84.0592 137.67 85.9022 137.503C89.7021 137.159 93.4963 136.735 97.3013 136.444C100.733 136.182 90.4186 136.519 86.9771 136.519C85.4743 136.519 80.9873 136.856 82.4697 136.609C84.9407 136.197 87.4622 136.089 89.9573 135.923C91.8364 135.798 93.7042 135.557 95.577 135.369C96.7897 135.248 93.1397 135.369 91.921 135.369C89.5687 135.369 87.2486 135.444 84.9017 135.598C84.2821 135.639 83.6501 135.623 83.0338 135.704C82.563 135.766 83.4509 135.711 83.4648 135.71C85.7658 135.432 88.0791 135.299 90.383 135.029C92.3283 134.8 98.1849 134.411 96.2263 134.411C94.2826 134.411 92.337 134.384 90.3937 134.422C87.7398 134.474 79.8 135.114 82.443 134.869C84.9223 134.639 87.4081 134.36 89.8828 134.081C91.7085 133.876 93.5313 133.679 95.3642 133.549C95.6948 133.526 96.6854 133.459 96.354 133.453C94.7452 133.427 93.1489 133.527 91.5432 133.602C88.1376 133.763 84.7262 133.67 81.3202 133.789C80.8768 133.804 79.5525 133.896 79.9897 133.821C81.1051 133.629 82.2426 133.543 83.369 133.453C87.811 133.102 92.2675 132.895 96.7052 132.496C100.61 132.144 88.8646 132.496 84.9442 132.496C84.3571 132.496 83.7699 132.496 83.1828 132.496C82.8263 132.496 83.8881 132.391 84.2418 132.346C88.2872 131.841 92.3871 131.737 96.4498 131.421C96.5729 131.411 97.3228 131.35 97.5567 131.293C97.6508 131.27 97.3662 131.252 97.2693 131.25C96.3833 131.238 95.4941 131.244 94.6085 131.272C91.9244 131.355 89.2426 131.495 86.5567 131.532C85.9324 131.541 85.3079 131.538 84.6835 131.538C84.3094 131.538 85.4256 131.443 85.7957 131.389C88.8273 130.944 91.8784 130.73 94.9278 130.463C95.1483 130.443 97.1083 130.292 95.8538 130.292C93.6499 130.292 91.4471 130.376 89.2442 130.436C87.3885 130.486 85.5639 130.544 83.7203 130.761C81.6836 131 87.7961 130.296 89.8402 130.133C92.0873 129.953 94.3316 129.741 96.5775 129.547C97.5639 129.462 98.6483 129.476 99.6215 129.26C100.068 129.161 98.7062 129.237 98.2485 129.239C96.6145 129.245 94.9852 129.321 93.3526 129.377C90.5454 129.474 87.7313 129.565 84.923 129.616C84.8919 129.617 84.3929 129.628 84.2577 129.616C84.1957 129.611 84.3724 129.565 84.4334 129.553C86.0667 129.21 87.7203 129.014 89.3826 128.877C92.6337 128.609 95.9111 128.327 99.1745 128.281C101.005 128.255 95.5121 128.269 93.6825 128.334C91.2969 128.418 88.9026 128.403 86.5195 128.52C86.2532 128.533 85.4547 128.568 85.7212 128.568C86.5958 128.568 87.4694 128.45 88.3395 128.376C91.723 128.093 95.1232 127.879 98.4933 127.461C98.8974 127.411 100.039 127.468 99.696 127.248C99.3402 127.02 98.1201 127.227 97.7536 127.227C92.1413 127.227 75.3118 127.797 80.921 127.61C83.5191 127.524 86.1428 127.298 88.7333 127.089C91.0073 126.905 93.2781 126.758 95.5557 126.631C96.4048 126.583 96.8082 126.558 97.6099 126.482C97.9247 126.452 98.6933 126.653 98.5519 126.37C98.5022 126.271 97.1841 126.416 97.1416 126.418C96.0914 126.477 95.0398 126.532 93.9912 126.615C91.1935 126.835 88.397 126.897 85.5988 127.083C85.3344 127.101 84.8742 127.132 84.5824 127.174C84.3131 127.212 84.489 127.215 84.6303 127.206C85.6099 127.138 86.5871 126.955 87.5625 126.844C91.3758 126.409 95.2677 126.155 99.0255 125.354C99.0657 125.345 99.8153 125.176 99.9834 125.088C100.064 125.045 99.8085 125.025 99.7173 125.024C98.704 125.009 97.6848 125.07 96.6733 125.12C92.4605 125.325 88.2562 125.482 84.0396 125.593C83.1945 125.615 84.2892 125.501 84.3535 125.492C85.5818 125.322 86.814 125.193 88.0468 125.061C91.1037 124.734 94.1712 124.285 97.2374 124.066C98.4409 123.98 94.8301 124.237 93.6293 124.353C90.1458 124.692 86.6387 124.599 83.1562 124.928C82.6795 124.973 81.2546 125.156 81.7299 125.098C82.7253 124.978 83.7135 124.808 84.7101 124.694C88.3578 124.277 92.0268 124.041 95.6728 123.608C95.972 123.573 96.7802 123.618 96.5562 123.417C96.4159 123.29 95.622 123.394 95.4919 123.395C92.6248 123.423 89.7377 123.711 86.8707 123.837C85.8213 123.883 84.7852 123.99 83.7415 124.098C83.6586 124.106 83.412 124.118 83.4914 124.093C83.6855 124.03 84.2549 123.93 84.3589 123.912C88.0707 123.239 91.8495 122.754 95.609 122.459C96.0346 122.425 96.4614 122.406 96.8862 122.363C96.9606 122.355 96.7375 122.342 96.6627 122.342C95.6306 122.335 94.5972 122.336 93.5654 122.363C90.3466 122.446 87.1315 122.576 83.9118 122.65C83.2391 122.666 83.137 122.676 82.5282 122.704C82.4183 122.708 82.1036 122.76 82.1982 122.704C82.815 122.339 83.9001 122.253 84.5717 122.139C88.4513 121.483 92.4014 121.111 96.3114 120.681C97.086 120.596 96.5106 120.615 96.2316 120.623C95.3088 120.647 94.3897 120.739 93.4696 120.809C89.7293 121.094 85.9804 121.231 82.2408 121.501C81.5453 121.551 81.5234 121.568 80.8997 121.629C80.7513 121.643 80.3672 121.772 80.4527 121.65C80.6656 121.346 82.4163 121.274 82.6985 121.235C86.7015 120.678 90.7395 120.369 94.7628 120.005C95.2723 119.959 96.7889 119.818 96.2795 119.771C95.6511 119.714 94.9471 119.859 94.3211 119.899C91.279 120.092 88.2506 120.414 85.1997 120.426C84.8378 120.427 84.4759 120.426 84.1141 120.426C84.0041 120.426 83.7349 120.524 83.7841 120.426C83.8602 120.274 85.2821 120.068 85.3913 120.043C89.395 119.115 93.5037 118.733 97.5195 117.866C97.6944 117.828 98.1359 117.73 98.3656 117.664C98.4054 117.653 98.4979 117.632 98.472 117.6C98.3557 117.455 97.4435 117.556 97.3651 117.557C94.0587 117.613 90.7355 117.946 87.4348 118.148C86.4078 118.211 85.3854 118.325 84.3589 118.393C84.1466 118.407 83.6502 118.463 84.2099 118.35C87.0672 117.775 89.964 117.495 92.863 117.217C94.1004 117.098 95.3523 117.026 96.5828 116.844C96.6587 116.833 96.8946 116.804 96.6839 116.791C96.5183 116.781 96.1353 116.788 96.0081 116.791C93.8808 116.84 91.7469 117.012 89.622 117.126C87.5028 117.24 85.3452 117.261 83.236 117.499C81.4568 117.7 86.7777 116.969 88.5524 116.733C90.4519 116.479 92.353 116.224 94.2572 116.009C94.9351 115.932 95.6688 115.94 96.3434 115.828C97.9675 115.557 93.0559 116.026 91.4155 116.168C90.1385 116.279 88.8634 116.41 87.5838 116.488C87.1546 116.514 85.9166 116.765 86.296 116.562C86.8544 116.264 87.5865 116.084 88.1905 115.924C89.9683 115.453 91.8022 115.175 93.5974 114.774C95.1147 114.435 96.6343 114.097 98.1421 113.721C98.4244 113.65 97.5599 113.726 97.2693 113.742C95.7086 113.827 94.1552 114.031 92.5969 114.152C89.3939 114.399 86.1392 114.439 82.9539 114.859C80.5697 115.174 87.7188 114.201 90.1063 113.912C92.4957 113.623 99.6745 112.85 97.28 113.093C94.3214 113.392 91.3941 113.885 88.4246 114.093C87.0108 114.192 85.5942 114.248 84.1832 114.386C83.912 114.412 83.1039 114.523 83.369 114.46C86.2735 113.769 89.2533 113.381 92.1924 112.858C93.4597 112.633 94.7292 112.408 96.0134 112.305C96.2873 112.283 96.5724 112.28 96.1198 112.284C93.824 112.305 91.5324 112.637 89.2442 112.805C87.616 112.925 85.9884 113.046 84.3589 113.146C83.7594 113.182 83.0727 113.153 82.4856 113.316C81.9332 113.47 83.6032 113.057 84.1673 112.954C86.726 112.487 89.3365 112.311 91.9104 111.938C94.8721 111.509 103.805 110.603 100.824 110.868C97.5944 111.155 94.4038 111.8 91.16 112.028C89.4629 112.147 87.7625 112.182 86.0618 112.188C85.6751 112.189 85.2884 112.191 84.9017 112.188C84.7985 112.187 84.51 112.228 84.593 112.167C85.0406 111.837 85.9861 111.719 86.4982 111.602C88.5654 111.131 90.6823 110.777 92.7725 110.426C94.4881 110.138 96.2136 109.927 97.9345 109.676C98.0155 109.664 98.2554 109.615 98.174 109.623C97.9035 109.65 97.4052 109.729 97.1895 109.761C93.2437 110.349 89.2913 110.62 85.3061 110.751C83.8192 110.8 82.3327 110.853 80.8465 110.921C80.1607 110.953 80.5049 110.928 80.9423 110.857C85.2125 110.169 89.5781 109.875 93.8794 109.421C95.2132 109.28 96.5486 109.133 97.8867 109.037C98.1162 109.021 98.0981 109.023 97.9612 109.037C97.5032 109.087 97.7236 109.061 97.1203 109.133C92.7964 109.651 88.5056 109.829 84.1566 110.006C83.4362 110.035 82.7169 110.097 81.996 110.112C81.5756 110.122 82.0701 110.015 82.1557 109.995C83.7038 109.63 85.2877 109.404 86.8601 109.176C89.6519 108.771 92.4477 108.386 95.2471 108.037C96.5995 107.868 100.663 107.435 99.3022 107.515C96.021 107.708 92.7694 108.249 89.4783 108.383C87.362 108.469 85.2418 108.452 83.1242 108.452C83.0978 108.452 80.9702 108.338 80.9796 108.33C81.5725 107.814 83.0697 107.753 83.7788 107.638C85.6317 107.336 87.4956 107.08 89.3559 106.829C91.0215 106.604 92.6987 106.441 94.3584 106.174C95.5112 105.989 93.2564 106.164 93.1503 106.174C89.906 106.479 86.6655 106.802 83.4116 106.994C82.0097 107.076 80.609 107.174 79.2074 107.26C78.9205 107.278 78.6272 107.338 78.3453 107.281C77.953 107.203 79.1162 107.06 79.5108 106.994C84.2553 106.199 89.1079 105.844 93.8954 105.408C95.2565 105.284 96.7873 105.337 98.1261 105.009C98.5223 104.912 97.1164 105.072 97.0671 105.078C94.1199 105.42 91.1647 105.696 88.2011 105.844C86.6545 105.922 85.1079 105.935 83.5606 105.983C82.9364 106.002 83.1035 105.997 82.6453 106.036C82.1928 106.075 83.5409 105.885 83.9863 105.796C87.908 105.022 91.8852 104.495 95.8484 103.982C96.4787 103.9 98.3698 103.664 97.743 103.769C96.8849 103.912 96.0242 104.048 95.1619 104.163C91.9592 104.59 88.7324 104.564 85.5084 104.642C84.5277 104.665 84.7915 104.665 83.9118 104.695C83.7381 104.701 83.3539 104.865 83.3903 104.695C83.4336 104.493 83.7776 104.551 83.9757 104.493C84.9516 104.206 85.9355 103.981 86.9399 103.817C90.2599 103.275 93.6356 102.785 96.982 102.433C98.5357 102.27 93.8982 102.938 92.3521 103.162C90.0958 103.49 87.68 103.852 85.3913 103.758C84.851 103.736 86.4528 103.55 86.9878 103.471C88.6992 103.219 90.4142 102.978 92.1286 102.747C94.0671 102.486 96.0134 102.276 97.9612 102.098C98.7905 102.022 99.6732 102.028 100.494 101.864C102.68 101.427 96.0718 102.453 93.8475 102.598C89.6962 102.869 85.5224 102.992 81.3627 102.992C81.2812 102.992 79.6796 102.938 79.7503 102.907C81.4027 102.177 83.4911 102.058 85.2529 101.821C89.4427 101.258 93.6458 100.71 97.8654 100.427C99.8332 100.295 93.9513 100.929 91.9849 101.081C88.8887 101.321 85.7681 101.523 82.6612 101.523C80.524 101.523 83.4427 100.969 83.6511 100.922C88.2378 99.8775 92.9267 99.3447 97.5141 98.3088C99.553 97.8484 93.388 98.997 91.309 99.2135C87.5849 99.6015 83.7639 99.8796 80.0163 99.7297C80.012 99.7296 79.7876 99.7603 79.8673 99.6605C79.9858 99.5124 80.2321 99.4207 80.3782 99.3625C82.0572 98.694 83.9104 98.3847 85.668 98.0055C88.4264 97.4104 91.1951 96.8822 93.9858 96.4622C95.5126 96.2324 96.0312 96.1741 97.4716 95.9832C97.8933 95.9274 98.603 95.7544 99.0787 95.7544C99.6106 95.7544 98.0456 96.0084 97.5248 96.1163C95.8166 96.4703 94.0927 96.7641 92.3627 96.989C90.0317 97.2921 87.6866 97.4226 85.3381 97.4893C84.3592 97.5171 83.2697 97.5273 82.2834 97.5319C81.9676 97.5333 81.6519 97.5319 81.3361 97.5319C81.1086 97.5319 80.4682 97.6192 80.655 97.4893C80.994 97.2534 81.4404 97.2304 81.8417 97.1327C82.8691 96.8827 83.3598 96.7938 84.444 96.6378C86.9008 96.2844 89.3828 96.0209 91.8518 95.7704C94.9276 95.4582 104.19 94.9341 101.106 95.1584C99.9786 95.2404 98.8602 95.4807 97.7376 95.6107C95.4452 95.8763 93.1397 95.9569 90.8354 96.0471C88.6079 96.1343 86.3803 96.235 84.1513 96.2759C84.046 96.2779 81.6491 96.4744 82.9859 96.0631C84.4858 95.6015 86.0356 95.3305 87.5732 95.0307C89.8241 94.5917 92.0688 94.1171 94.3317 93.7428C95.1777 93.6028 97.7241 93.2362 96.8755 93.3596C93.9332 93.7876 90.9938 94.0381 88.0255 94.2537C87.5453 94.2886 83.8219 94.5587 82.7623 94.589C81.858 94.6148 82.824 94.4309 83.0391 94.3761C85.1394 93.8412 87.2773 93.4572 89.4198 93.1361C91.9536 92.7564 94.5029 92.5012 97.0405 92.1516C99.1363 91.8629 96.5049 92.327 96.0879 92.3911C91.4457 93.1044 86.6564 93.3826 81.9641 93.4129C81.4461 93.4162 80.928 93.4234 80.4102 93.4129C80.3224 93.4111 80.0811 93.3968 80.1547 93.349C80.5068 93.1204 80.9355 93.038 81.3361 92.9126C83.1896 92.3326 85.073 91.8474 86.9612 91.3959C90.1219 90.6402 93.3054 89.9711 96.4977 89.363C97.1744 89.2341 97.8539 89.1198 98.5306 88.9905C98.5879 88.9796 98.7537 88.9268 98.6956 88.932C97.7313 89.0177 96.774 89.191 95.8112 89.2938C93.1995 89.5728 90.5816 89.6654 87.9563 89.677C85.9626 89.6858 83.9685 89.677 81.9747 89.677C81.8326 89.677 80.3848 89.7956 81.4426 89.5493C83.1715 89.1467 84.9268 88.9583 86.6898 88.7723C89.831 88.441 92.9736 88.1219 96.1145 87.7878C96.4143 87.7559 97.2647 87.5248 97.0139 87.692C96.7984 87.8357 96.5035 87.7802 96.2476 87.8197C94.7149 88.0565 93.1715 88.2271 91.6283 88.3785C89.0247 88.6339 86.4195 88.7323 83.8054 88.8096C82.4666 88.8491 81.5427 88.8754 80.2505 88.9C80.2285 88.9005 78.737 89.0093 79.729 88.783C84.818 87.6216 90.0384 87.1434 95.2152 86.5585C96.1642 86.4513 97.2437 86.3283 98.206 86.1966C98.477 86.1595 98.7836 86.2043 99.0149 86.0582C99.156 85.9691 98.6815 86.0353 98.5146 86.037C97.5874 86.0461 96.6657 86.1136 95.742 86.1913C92.3514 86.4763 88.878 86.8672 85.4711 86.6969C85.1765 86.6821 85.163 86.6674 85.4498 86.5798C85.8445 86.4592 86.6693 86.2751 86.9878 86.2019C89.7218 85.574 92.4722 85.0454 95.2471 84.632C96.0879 84.5068 96.9332 84.3897 97.7802 84.3127C98.204 84.2742 96.9356 84.4173 96.5137 84.4724C92.2111 85.0336 87.9191 84.9833 83.5872 84.9833C82.4414 84.9833 83.6012 84.8285 83.8959 84.7704C85.8318 84.3887 87.7977 84.1728 89.7551 83.9349C91.4521 83.7286 93.1532 83.5475 94.848 83.3229C94.939 83.3108 95.211 83.2679 95.1194 83.275C94.6112 83.3141 94.1037 83.3949 93.5974 83.4506C90.0133 83.8451 86.4109 84.0456 82.8049 84.0254C82.2218 84.0221 80.9556 84.0211 82.3898 83.6528C84.7436 83.0484 87.1792 82.7175 89.5795 82.3597C90.8026 82.1773 92.0275 81.9773 93.2568 81.8381C93.5295 81.8073 93.4553 81.8215 93.3685 81.8275C92.7693 81.8688 93.5671 81.8077 92.5862 81.8807C89.2885 82.126 85.9818 82.3421 82.6772 82.4714C82.5481 82.4765 81.4771 82.5481 82.2834 82.3118C83.6488 81.9115 85.0901 81.7669 86.4982 81.6093C88.1966 81.4192 89.8998 81.2572 91.607 81.1729C92.6099 81.1234 91.9573 81.1633 91.4261 81.2102C89.0615 81.4188 86.702 81.5876 84.3269 81.6253C83.1159 81.6445 83.8995 81.5616 84.5504 81.4656C86.4215 81.1898 88.2766 81.019 90.1595 80.8643"
                            stroke="#6C63FF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                      </svg>
                    </Card.Body>
                  </Card>
                </Col>
                <Col
                  className="card-offers-faq-col"
                  lg={{ span: 4, offset: 0 }}
                  md={{ span: 6, offset: 3 }}
                  sm={{ span: 12 }}
                >
                  <Card className="hvr-float shadow card-offers-faq">
                    <Card.Body>
                      <Card.Title>What type of special offers?</Card.Title>
                      <Card.Text>
                        You will recieve special access to promo codes of $10 or
                        more, exclusive access to giveaways which can include
                        free snacks, tickets to local concerts, and more!
                      </Card.Text>
                      <img src={offers_faq} alt="checkmark" />
                    </Card.Body>
                  </Card>
                </Col>
              </CardDeck>
            </Row>
          </Fade>
        </Container>
      </Container>
    </div>
  );
}

export default Premium;
