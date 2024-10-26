import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

const signUpForm = z.object({
  restaurantName: z.string(),
  user: z.string(),
  email: z.string().email(),
  phone: z.string(),
});

type SignUpForm = z.infer<typeof signUpForm>;

export function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>();

  async function handleSignUp(data: SignUpForm) {
    console.log(data);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success("Restaurant registered with success.", {
        action: {
          label: "Login",
          onClick: () => {
            navigate("/sign-in");
          },
        },
      });
    } catch (error) {
      toast.error("Error creating account.");
    }
  }

  return (
    <>
      <Helmet title="Register" />
      <div className="p-8">
        <Button variant={"ghost"} asChild className="absolute right-8 top-8">
          <Link to="/sign-uin">Already have an account? Sign-in</Link>
        </Button>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create account
            </h1>
            <p className="text-sm text-muted-foreground">
              Register to access the partner panel!
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Restaurant name</Label>
              <Input id="restaurantName" {...register("restaurantName")} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="user">Your Name</Label>
              <Input id="user" {...register("user")} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" {...register("phone")} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Your email</Label>
              <Input id="email" type="email" {...register("email")} />
            </div>

            <Button disabled={isSubmitting} className="w-full" type="submit">
              Create account
            </Button>

            <p className="text-sm text-muted-foreground text-center">
              By registering, you agree to our{" "}
              <Link
                to="/documents/terms"
                className="text-primary underline underline-offset-4 "
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                to="/documents/privacy"
                className="text-primary underline underline-offset-4"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
