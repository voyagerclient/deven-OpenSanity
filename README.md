# Deven - AI Server  

**Deven** is a powerful AI server that integrates OpenAI and Claude APIs to handle natural language processing tasks. The server is designed to process requests via HTTP and return AI-generated responses. It is hosted locally and supports querying either OpenAI or Claude models based on user input.

---

## Features
- Supports **OpenAI** (GPT-4) and **Claude** (Claude-2) APIs.
- Easily extendable and configurable.
- Handles AI requests through a simple REST API.
- Written in **TypeScript** for strong typing and scalability.
- Includes structured logging for easy debugging.

---

## Prerequisites
Before using **Deven**, ensure the following are installed:
- **Node.js** (v14 or later)
- **npm** or **yarn**
- API keys for:
  - OpenAI
  - Claude (Anthropic)

---

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/voyagerclient/deven-OpenSanity.git
   cd deven-OpenSanity 
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add your API keys:
   ```dotenv
   OPENAI_API_KEY=your-openai-api-key
   CLAUDE_API_KEY=your-claude-api-key
   PORT=3000
   ```

4. Compile the TypeScript code:
   ```bash
   npx tsc
   ```

5. Start the server:
   ```bash
   node dist/index.js
   ```

---

## Usage
Once the server is running, it listens on `http://localhost:3000`. You can interact with it via HTTP requests.

### Endpoints
#### 1. **Root Endpoint**
   - **URL:** `GET /`
   - **Description:** Returns a message indicating the server is running.
   - **Response:**
     ```json
     {
       "message": "AI Server is running!"
     }
     ```

#### 2. **AI Query Endpoint**
   - **URL:** `POST /ai/query`
   - **Description:** Sends a prompt to the specified AI model (OpenAI or Claude).
   - **Request Body:**
     ```json
     {
       "provider": "openai", // or "claude"
       "prompt": "Your prompt here"
     }
     ```
   - **Response Example:**
     ```json
     {
       "success": true,
       "data": "AI-generated response"
     }
     ```

---

## Development
### Project Structure
```
src/
├── index.ts            # Main entry point
├── services/           # Handles API integrations
│   ├── openaiService.ts
│   ├── claudeService.ts
├── utils/              # Utility functions
│   └── logger.ts
.env                    # Environment variables
tsconfig.json           # TypeScript configuration
package.json            # NPM configuration
```

### Scripts
- **Install dependencies:** `npm install`
- **Compile TypeScript:** `npx tsc`
- **Run server:** `node dist/index.js`

### Extending the Project
- Add additional models or providers by creating new service files in the `services/` directory.
- Update `index.ts` to include routes for new services.

---

## Example Request Using cURL
Send a query to OpenAI:
```bash
curl -X POST http://localhost:3000/ai/query \
-H "Content-Type: application/json" \
-d '{
  "provider": "openai",
  "prompt": "Tell me a joke about programming."
}'
```

---

## Troubleshooting
### Common Issues
1. **Missing API Keys**  
   Ensure the `.env` file contains valid API keys for OpenAI and Claude.

2. **Port Conflicts**  
   If port 3000 is in use, update the `PORT` value in the `.env` file.

3. **API Rate Limits**  
   Check your usage limits on OpenAI and Claude APIs if you experience errors.

---

## License
This project is licensed under the **MIT License**. Feel free to modify and use it in your own projects.

---

## Contribution
Contributions are welcome! Feel free to submit issues or pull requests on the [GitHub repository](https://github.com/voyagerclient/deven-OpenSanity).

---

**Deven**: Bringing AI closer to developers.
