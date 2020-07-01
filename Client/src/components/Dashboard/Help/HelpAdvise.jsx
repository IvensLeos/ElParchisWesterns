import React from 'react'

import Card from 'react-bootstrap/Card'

import { CardInputLabels, CardBodyText } from './Help.module.css'
import './Help.css'

const HelpAdvise = () => {
   return (
     <>
      <Card className="ScrollCard scrollbar-pink bordered-pink square thin">
        <Card.Body>
          <Card.Title className={CardInputLabels}>SOBRE JUEGO RESPONSABLE:</Card.Title>
          <Card.Text className={CardBodyText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla arcu,
            rutrum sed dolor quis, facilisis volutpat libero. Nam finibus, eros ac blandit luctus,
            orci sem eleifend lacus, congue iaculis turpis magna et quam.
            In eleifend pulvinar arcu, in tristique elit. Donec auctor eget lacus eget efficitur.
            Mauris id neque a urna sodales auctor eu vel eros.
            Pellentesque accumsan id enim ac iaculis. Nulla facilisi.
            Integer in lectus quis eros tristique eleifend.
          </Card.Text>
          <Card.Text className={CardBodyText}>
            Nulla ornare tristique consequat. Nulla in venenatis dui. Cras et dui congue,
            finibus velit vel, feugiat orci. Mauris quis eros auctor, molestie diam ac,
            gravida tellus. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Maecenas ut nulla semper, porta dolor nec, tincidunt ipsum.
          </Card.Text>
          <Card.Text className={CardBodyText}>
            Aenean mollis ullamcorper nisl sed hendrerit.
            Quisque vitae augue sed sem consequat laoreet quis ullamcorper ligula.
            Mauris interdum massa vel dictum aliquam. Ut commodo porttitor vulputate.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Duis malesuada suscipit erat, a efficitur lorem lobortis vitae.
          </Card.Text>
          <Card.Text className={CardBodyText}>
            Nulla ornare tristique consequat. Nulla in venenatis dui. Cras et dui congue,
            finibus velit vel, feugiat orci. Mauris quis eros auctor, molestie diam ac,
            gravida tellus. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Maecenas ut nulla semper, porta dolor nec, tincidunt ipsum.
          </Card.Text>
          <Card.Text className={CardBodyText}>
            Aenean mollis ullamcorper nisl sed hendrerit.
            Quisque vitae augue sed sem consequat laoreet quis ullamcorper ligula.
            Mauris interdum massa vel dictum aliquam. Ut commodo porttitor vulputate.
            Aenean mollis ullamcorper nisl sed hendrerit.
            Quisque vitae augue sed sem consequat laoreet quis ullamcorper ligula.
            Mauris interdum massa vel dictum aliquam. Ut commodo porttitor vulputate.
          </Card.Text>
        </Card.Body>
      </Card>
     </>
   )
}

export default HelpAdvise