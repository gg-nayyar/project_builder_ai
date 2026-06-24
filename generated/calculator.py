# Simple CLI calculator

def main():
    """Basic calculator with user input."""
    print("Calculator + Average tool")
    choice = input("Choose mode: (1) arithmetic  (2) average of numbers: ")

    if choice == "1":
        try:
            expression = input("Enter expression (e.g. 3 + 4): ")
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

    elif choice == "2":
        try:
            raw = input("Enter numbers separated by spaces: ")
            nums = [float(x) for x in raw.split()]
            if len(nums) == 0:
                print("No numbers entered.")
                return
            avg = sum(nums) / len(nums)
            print(f"Average of {len(nums)} numbers = {avg}")
        except ValueError:
            print("Error: invalid number(s)")
        except Exception as e:
            print(f"Unexpected error: {e}")

    else:
        print("Invalid choice. Please enter 1 or 2.")


if __name__ == "__main__":
    main()