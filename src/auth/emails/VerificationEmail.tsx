import * as React from 'react';
import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
} from '@react-email/components';

interface VerificationEmailProps {
    code: string;
}

export const VerificationEmail = ({ code }: VerificationEmailProps) => {
    return (
        <Html>
            <Head />
            <Preview>Tu código de verificación de Injoyplan es {code}</Preview>
            <Body style={main}>
                <Container style={container}>
                    {/* Header Section */}
                    <Section style={header}>
                        <Img
                            src="https://res.cloudinary.com/djv4z61q9/image/upload/v1766094464/injoy-logo.png" // Placeholder or user provided logo
                            width="150"
                            height="auto"
                            alt="Injoyplan"
                            style={logo}
                        />
                        <Heading style={headerTitle}>
                            <span style={{ color: '#00DFD1' }}>VERIFICA</span><br />
                            <span style={{ color: '#00DFD1' }}>TU CORREO</span><br />
                            <span style={{ color: '#FFFFFF', fontSize: '16px', fontWeight: 'normal', fontFamily: 'sans-serif', fontStyle: 'italic' }}>ESTÁS A UN PASO</span>
                        </Heading>

                        <Section style={iconRow}>
                            <Text style={{ fontSize: '24px', margin: '0 5px' }}>✉️</Text>
                            <Text style={{ fontSize: '24px', margin: '0 5px' }}>🌟</Text>
                            <Text style={{ fontSize: '24px', margin: '0 5px' }}>✅</Text>
                        </Section>
                    </Section>

                    {/* Content Section */}
                    <Section style={content}>
                        <Text style={paragraph}>
                            Ingresa este código para completar la verificación de tu correo.
                        </Text>

                        <Section style={codeBox}>
                            <Text style={codeLabel}>El código es: 👇</Text>
                            <Section style={codeContainer}>
                                <Text style={codeText}>{code}</Text>
                            </Section>
                        </Section>

                        <Text style={footerText}>
                            Si tu no has creado tu cuenta en Injoyplan, por favor ignora este correo electrónico.
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
};

export default VerificationEmail;

const main = {
    backgroundColor: '#f6f9fc',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
    backgroundColor: '#ffffff',
    margin: '0 auto',
    padding: '0',
    marginBottom: '64px',
    borderRadius: '12px',
    overflow: 'hidden',
    maxWidth: '600px',
};

const header = {
    backgroundColor: '#0B0E14',
    padding: '40px 20px',
    textAlign: 'center' as const,
};

const logo = {
    margin: '0 auto 20px',
    display: 'block',
    filter: 'brightness(0) invert(1) drop-shadow(0 0 4px #00DFD1)', // Make logo white/glow if possible, or assume white logo
};

const headerTitle = {
    color: '#00DFD1',
    fontSize: '42px',
    fontWeight: '900',
    lineHeight: '1',
    margin: '0',
    textTransform: 'uppercase' as const,
    fontFamily: 'Arial Black, Arial, sans-serif',
};

const iconRow = {
    textAlign: 'center' as const,
    marginTop: '20px',
};

const content = {
    padding: '40px 40px',
    textAlign: 'center' as const,
};

const paragraph = {
    fontSize: '16px',
    lineHeight: '26px',
    color: '#525f7f',
    marginBottom: '20px',
};

const codeBox = {
    backgroundColor: '#F9FAFB',
    borderRadius: '16px',
    padding: '30px',
    margin: '30px 0',
};

const codeLabel = {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#212121',
    margin: '0 0 10px',
};

const codeContainer = {
    backgroundColor: '#E8F1F5',
    borderRadius: '10px',
    padding: '10px',
    border: '1px solid #D0DCE3',
    width: 'fit-content',
    margin: '0 auto',
};

const codeText = {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#212121',
    margin: '0',
    letterSpacing: '4px',
};

const footerText = {
    fontSize: '12px',
    color: '#8898aa',
    marginTop: '20px',
};
