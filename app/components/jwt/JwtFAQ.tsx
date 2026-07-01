"use client";

import FAQ from "../tool/FAQ";

export default function JwtFAQ() {
  return (
    <FAQ
      items={[
        {
          question: "What is a JWT?",
          answer:
            "JWT (JSON Web Token) is an open standard (RFC 7519) used to securely transmit information between two parties as a compact JSON object. JWTs are commonly used for authentication and authorization in web and mobile applications.",
        },
        {
          question: "How does a JWT work?",
          answer:
            "A JWT consists of three parts separated by dots: Header, Payload, and Signature. The header contains metadata, the payload stores claims, and the signature verifies the integrity of the token.",
        },
        {
          question: "What are the three parts of a JWT?",
          answer:
            "A JWT contains a Header, a Payload, and a Signature. The Header specifies the algorithm, the Payload contains claims such as user information, and the Signature helps verify that the token has not been modified.",
        },
        {
          question: "Is a JWT encrypted?",
          answer:
            "No. Standard JWTs are Base64URL encoded, not encrypted. Anyone can decode the header and payload. Sensitive information should never be stored directly inside a JWT unless it is encrypted separately.",
        },
        {
          question: "Can anyone decode a JWT?",
          answer:
            "Yes. The Header and Payload are publicly readable because they are only Base64URL encoded. The Signature prevents tampering but does not hide the token contents.",
        },
        {
          question: "Can this tool verify the JWT signature?",
          answer:
            "This tool focuses on decoding and inspecting JWTs locally in your browser. It does not verify the cryptographic signature because signature verification requires the appropriate secret key or public key.",
        },
        {
          question: "What is the difference between HS256 and RS256?",
          answer:
            "HS256 uses a shared secret key for signing and verification. RS256 uses a private key to sign the token and a public key to verify it, making it more suitable for distributed systems.",
        },
        {
          question: "What does the 'exp' claim mean?",
          answer:
            "The 'exp' (Expiration Time) claim defines when the JWT expires. After this timestamp, the token should no longer be accepted by the application or API.",
        },
        {
          question: "What do the 'iat' and 'nbf' claims mean?",
          answer:
            "'iat' (Issued At) indicates when the token was created, while 'nbf' (Not Before) specifies the earliest time the token becomes valid.",
        },
        {
          question: "Is this JWT Decoder secure?",
          answer:
            "Yes. All decoding happens locally in your browser. Your JWT is never uploaded or transmitted to any server, helping keep your token private.",
        },
        {
          question: "Is this JWT Decoder free?",
          answer:
            "Yes. FastWebTools provides this JWT Decoder completely free with no registration, subscriptions, or hidden costs.",
        },
      ]}
    />
  );
}
