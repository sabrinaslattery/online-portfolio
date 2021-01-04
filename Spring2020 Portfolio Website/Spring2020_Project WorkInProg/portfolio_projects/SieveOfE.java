import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

//implement a class that computes all the primes up to some integer n
public class SieveOfE {
	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
		System.out.println("Enter an integer up to which all primes will be displayed: ");
		int n = in.nextInt();
		
		Queue<Integer> q = new LinkedList<Integer>();
		
		for (int i=2; i<=n; i++) { //int i=2 starts queue at 2 because 1 is not a prime number
			q.offer(i);
			if (q.isEmpty()) {
				throw new IllegalArgumentException ("Integer cannot be zero or negative");
			}
		}
		System.out.println("\nQueue before Prime number removal: \n" + q);
		
		ArrayList<Integer> newQ = new ArrayList<Integer>();
		
		while (q.size() > 0) {
			int x = q.poll();
			if (x%2==0 && x!=2) { //removes mults of 2 except 2
				q.remove(x);
			}
			else if (x%3 == 0 && x!=3) { //removes mults of 3 except 3
				q.remove(x);
			}
			else if (x%5 == 0 && x!=5) { //removes mults of 5 except 5
				q.remove(x);
			}
			else if (x%7 == 0 && x!=7) { //removes mults of 7 except 7
				q.remove(x);
			}
			else if (x%(Math.sqrt(x))== 0) { //removes perfect squares
				q.remove(x);
			}
			else {
				newQ.add(x);
				q.remove(x);
			}
		}
		
		System.out.println("\nAll prime numbers up to " + n + ": \n" + newQ);
		
	}
}