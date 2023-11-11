# Creator Application

## Introduction

Creator is a microservices-based application designed to automate various e-commerce operations. It consists of two primary services: the `schedule-engine` and the `segment-engine`. These services are built to integrate seamlessly with commercetools, leveraging the power of TypeScript and Google Cloud Platform.

## Services

### Schedule Engine

- **Purpose**: Manages time-sensitive sales campaigns, including scheduling, product/category management, and pricing adjustments.
- **Tech Stack**: Node.js, TypeScript, Firestore/Cloud SQL, commercetools SDK.
- **Folder Path**: `/services/schedule-engine`

### Segment Engine

- **Purpose**: Handles customer segmentation based on various criteria such as purchase amount, lifetime value, and domain names.
- **Tech Stack**: Node.js, TypeScript, Firestore/Cloud SQL, commercetools SDK.
- **Folder Path**: `/services/segment-engine`

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- NPM or Yarn
- Access to commercetools and Google Cloud Platform (Firestore or Cloud SQL)
- TypeScript

### Installation

1. Clone the repository:

   ```bash
   git clone [repository URL]
   ```

2. Navigate to each service directory and install dependencies:

   ```bash
   cd services/schedule-engine
   npm install
   cd ../segment-engine
   npm install
   ```

### Configuration

Each service requires a specific configuration for connecting to commercetools and your chosen database (Firestore/Cloud SQL). Follow the instructions in each service's `config` directory.

## Usage

To start each service, navigate to the service's directory and run:

```bash
npm start
```

Ensure the environment variables and configurations are set correctly before starting the services.

## Testing

Each service comes with its own set of tests. To run these tests, use:

```bash
npm test
```

in the respective service directory.

## Deployment

The services are designed to be deployed on Google Cloud Platform. See the deployment guidelines in each service's documentation for detailed instructions.

## Contributing

Contributions to the Creator application are welcome. Please ensure to follow the coding standards and write tests for new features.

## License

MIT
