# Simple CLI calculator

def main():
    """Basic calculator with user input."""
    try:
        expression = input("Enter expression (e.g. 3 + 4): ")
        # tokenize by spaces
        parts = expression.split()
        if len(parts) != 3:
            print("Usage: number operator number (space-separated)")
            return

        a = float(parts[0])
        op = parts[1]
        b = float(parts[2])

        if op == "+":
            result = a + b
        elif op == "-":
            result = a - b
        elif op == "*":
            result = a * b
        elif op == "/":
            if b == 0:
                print("Error: division by zero")
                return
            result = a / b
        else:
            print(f"Unknown operator '{op}'. Use +, -, *, /")
            return

        print(f"{a} {op} {b} = {result}")

    except ValueError:
        print("Error: invalid number")
    except Exception as e:
        print(f"Unexpected error: {e}")


if __name__ == "__main__":
    main()
