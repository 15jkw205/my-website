#!/bin/bash

# Script to kill processes running on common development ports
# Usage: ./scripts/kill-dev-ports.sh

echo "🔍 Checking for processes on common development ports..."
echo ""

# Array of common development ports
PORTS=(3000 3001 4000 5000 8000 8080)

for PORT in "${PORTS[@]}"; do
    echo "Checking port $PORT..."
    PID=$(lsof -ti :$PORT 2>/dev/null)

    if [ -n "$PID" ]; then
        echo "  ⚠️  Process found (PID: $PID)"
        PROCESS_NAME=$(ps -p $PID -o comm= 2>/dev/null)
        echo "  📋 Process: $PROCESS_NAME"
        echo "  🔫 Killing process..."
        kill -9 $PID 2>/dev/null

        if [ $? -eq 0 ]; then
            echo "  ✅ Successfully killed process on port $PORT"
        else
            echo "  ❌ Failed to kill process on port $PORT"
        fi
    else
        echo "  ✅ Port $PORT is clear"
    fi
    echo ""
done

echo "✨ Port cleanup complete!"
echo ""
echo "To start your development server on port 8080, run:"
echo "  npm run dev"
