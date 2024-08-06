import React from 'react';
import { Container, Typography } from '@mui/material';

function PrivacyPolicy() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Política de Privacidad
      </Typography>
      <Typography variant="body1" paragraph>
        Esta política de privacidad describe cómo manejamos la información personal recopilada por nuestra aplicación móvil.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Información que recopilamos
      </Typography>
      <Typography variant="body1" paragraph>
        Recopilamos información personal que nos proporciona directamente, como su nombre, dirección de correo electrónico y cualquier otra información que decida proporcionar.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Uso de la información
      </Typography>
      <Typography variant="body1" paragraph>
        Utilizamos la información recopilada para proporcionar, mantener y mejorar nuestros servicios, así como para comunicarnos con usted.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Compartir información
      </Typography>
      <Typography variant="body1" paragraph>
        No compartimos su información personal con terceros, excepto cuando sea necesario para cumplir con la ley o proteger nuestros derechos.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Seguridad
      </Typography>
      <Typography variant="body1" paragraph>
        Tomamos medidas razonables para proteger su información personal contra pérdida, robo y uso no autorizado.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Cambios a esta política
      </Typography>
      <Typography variant="body1" paragraph>
        Podemos actualizar esta política de privacidad de vez en cuando. Le notificaremos sobre cualquier cambio publicando la nueva política en nuestra aplicación.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Contacto
      </Typography>
      <Typography variant="body1" paragraph>
        Si tiene alguna pregunta sobre esta política de privacidad, puede contactarnos a través de [correo electrónico].
      </Typography>
    </Container>
  );
}

export default PrivacyPolicy;