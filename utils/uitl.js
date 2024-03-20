import java.util.Scanner;

public class SimpleJavaProgram {
    public static void main(String[] args) {
        // Create a Scanner object to read input from the user
        Scanner scanner = new Scanner(System.in);

        // Prompt the user to enter the first number
        System.out.print("Enter the first number: ");
        // Read the first number from the user
        int num1 = scanner.nextInt();

        // Prompt the user to enter the second number
        System.out.print("Enter the second number: ");
        // Read the second number from the user
        int num2 = scanner.nextInt();

        // Close the Scanner object to prevent resource leak
        scanner.close();

        // Calculate the sum of the two numbers
        int sum = num1 + num2;

        // Print the sum
        System.out.println("The sum of " + num1 + " and " + num2 + " is: " + sum);
    }
}
