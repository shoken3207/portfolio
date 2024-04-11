type Reference<T, R> = T extends "get" ? R : string | null;
interface GetsType<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}
type DateType = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
type Structure<T, P> = T extends "get"
  ? { id: string } & DateType & Required<P>
  : T extends "gets"
  ? GetsType<{ id: string } & DateType & Required<P>>
  : Partial<DateType> & (T extends "patch" ? Partial<P> : P);

export type portfolio<T = "get"> = Structure<
  T,
  {
    /**
     * プロフィール
     */
    profile?: portfolio_profile;
    /**
     * 開発実績
     */
    works?: Reference<T, unknown>[];
    /**
     * 保持資格
     */
    acquisitions?: portfolio_qualification[];
    /**
     * 保持スキル
     */
    skills?: portfolio_skillsByCategory[];
  }
>;

interface portfolio_qualification {
  fieldId: "qualification";
  /**
   * 資格名
   */
  name: string;
  /**
   * 取得年月日
   */
  acquisitionDate: string;
}
interface portfolio_skill {
  fieldId: "skill";
  /**
   * スキル名
   */
  name: string;
  /**
   * スキルレベル
   */
  level: number;
}
interface portfolio_skillsByCategory {
  fieldId: "skillsByCategory";
  /**
   * タイトル
   */
  title: string;
  /**
   * ロゴ画像
   */
  logoImage: { url: string; width: number; height: number };
  /**
   * スキル
   */
  skills: portfolio_skill[];
}
export interface portfolio_profile {
  fieldId: "profile";
  /**
   * 苗字
   */
  lastName?: string;
  /**
   * 名前
   */
  firstName?: string;
  /**
   * 苗字（ふりがな）
   */
  lastName_furigana?: string;
  /**
   * 名前（ふりがな）
   */
  firstName_furigana?: string;
  /**
   * 誕生日
   */
  birthday?: string;
  /**
   * プロフィール画像
   */
  profileImage?: { url: string; width: number; height: number };
  /**
   * 紹介文
   */
  introduction?: string;
  /**
   * 関連リンク
   */
  links?: portfolio_link[];
}
interface portfolio_link {
  fieldId: "link";
  /**
   * 名前
   */
  name?: string;
  /**
   * url
   */
  url?: string;
  /**
   * ロゴ画像
   */
  logoImage?: { url: string; width: number; height: number };
}

export interface EndPoints {
  get: {
    portfolio: portfolio<"get">;
  };
  gets: {
    portfolio: portfolio<"gets">;
  };
  post: {
    portfolio: portfolio<"post">;
  };
  put: {
    portfolio: portfolio<"put">;
  };
  patch: {
    portfolio: portfolio<"patch">;
  };
}
