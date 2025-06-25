# GEM-T Chat Application - Architecture Guide

## Overview

GEM-T is a healthcare information chatbot application designed to provide information about transgender healthcare services in Brazil's public health system (SUS). The application is built as a full-stack web application with a modern React frontend and Express.js backend, featuring a conversational AI interface that helps users navigate complex healthcare processes.

## System Architecture

The application follows a monolithic architecture with clear separation between frontend and backend components:

- **Frontend**: React 18 with TypeScript, Vite for bundling, TailwindCSS for styling
- **Backend**: Express.js with TypeScript, serving both API endpoints and static files
- **Database**: PostgreSQL with Drizzle ORM for data persistence
- **Development Environment**: Configured for Replit with hot reload and automatic deployments

## Key Components

### Frontend Architecture

**React Application Structure**:

- Built with React 18 and TypeScript for type safety
- Vite as the build tool for fast development and optimized production builds
- Component-based architecture with reusable UI components
- Custom hooks for state management and API interactions

**UI Framework**:

- Shadcn/ui component library for consistent design system
- Radix UI primitives for accessible components
- TailwindCSS for utility-first styling with custom design tokens
- Responsive design supporting mobile and desktop interfaces

**State Management**:

- TanStack Query (React Query) for server state management
- Local React state for UI interactions
- Custom hooks for chat functionality and mobile detection

### Backend Architecture

**Express.js Server**:

- TypeScript-based Express application
- Middleware for request logging, JSON parsing, and error handling
- Separation of concerns with dedicated routes, services, and storage layers

**API Design**:

- RESTful endpoints for chat interactions and message retrieval
- Structured error handling with appropriate HTTP status codes
- Input validation using Zod schemas

**Service Layer**:

- Document processing service for handling healthcare information
- Natural language processing service for generating contextual responses
- Modular design allowing for easy extension and testing

### Data Flow

1. **User Interaction**: User submits a query through the chat interface
2. **Frontend Processing**: React components handle UI updates and loading states
3. **API Request**: Frontend sends POST request to `/api/chat` endpoint
4. **Backend Processing**:
   - Server validates input and stores user message
   - NLP service analyzes query and searches document corpus
   - System generates contextual response with source citations
   - Assistant message is stored in database
5. **Response Delivery**: Both user and assistant messages returned to frontend
6. **UI Update**: Chat interface updates with new messages and typing indicators

## External Dependencies

### Core Dependencies

- **@neondatabase/serverless**: PostgreSQL database driver for serverless environments
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight routing for React

### UI Dependencies

- **@radix-ui/\***: Comprehensive set of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

### Development Dependencies

- **vite**: Build tool and development server
- **typescript**: Type checking and compilation
- **tsx**: TypeScript execution for development

## Deployment Strategy

**Development Environment**:

- Replit-optimized configuration with automatic environment setup
- Hot module replacement for rapid development
- PostgreSQL database automatically provisioned

**Production Build**:

- Vite builds optimized frontend bundle to `dist/public`
- esbuild compiles backend TypeScript to `dist/index.js`
- Single deployment artifact serving both frontend and API

**Environment Configuration**:

- Database URL configured via environment variables
- Automatic port binding and health checks
- Scalable deployment target configured for production

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

- **June 24, 2025 - Content cleanup and terminology update**:
  - Removed all references to "AIDS" from information content
  - Updated terminology to use only "CRT" (Centro de Referência e Treinamento)
  - Updated FAQ data to reflect current terminology
  - Updated document processing content
  - Updated footer and contact page references
  - Ensured consistent terminology across all user-facing content

- **June 24, 2025 - Debug fixes and link validation**:
  - Fixed critical server error handler that was causing application crashes
  - Improved error logging with consistent formatting and appropriate console methods
  - Enhanced error messages with more context for better debugging
  - Added proper error handling in natural language processing service
  - Improved search functionality with better relevance sorting
  - Fixed all navigation links and external references
  - Created functional "Sobre" and "Contato" pages with proper routing
  - Updated API endpoints with better caching and error handling
  - Validated all external URLs and updated broken links
  - Enhanced 404 page with proper styling and navigation

## Changelog

- June 24, 2025. Initial setup and debugging improvements
