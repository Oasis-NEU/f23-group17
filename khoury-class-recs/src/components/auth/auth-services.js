import { supabase } from "../../supabase";
export default class AuthenticationServices {
  static async createUser(username, password, confirmPassword) {
    if (password === confirmPassword) {
      const { data, error } = await supabase.auth.signUp({
        email: username,
        password: password,
      });
      if (error) throw error;
    }
  }

  static async loginUser(username, password) {
    const { user, error } = await supabase.auth.signIn({
      email: username,
      password: password,
    });
    if (error) throw error;
    console.log(user.username);
  }
}
