import { supabase } from "@/app/_libs/supabase"
import { NextRequest } from "next/server";

export const getAuthUser = async (request: NextRequest) => {
  const authHeader = request.headers.get('Authorization');
  
  // ログ①：そもそもヘッダーが届いているか？
  console.log('--- Auth Debug ---');
  console.log('Header:', authHeader);

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    console.log('Error: No Bearer token found in header');
    return null;
  }

  const token = authHeader.split(' ')[1];

  try {
    const { data: { user }, error } = await supabase.auth.getUser(token);

    // ログ②：Supabaseからエラーが返ってきているか？
    if (error) {
      console.log('supabase Auth Error:', error.message);
      return null;
    }

    // ログ③：ユーザーが見つかったか？
    console.log('User found:', user?.id);
    return user;
  } catch (err) {
    console.log('Unexpected Error:', err);
    return null;
  }
};