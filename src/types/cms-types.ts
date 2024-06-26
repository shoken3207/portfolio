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

export type works<T = "get"> = Structure<
  T,
  {
    /**
     * 重要
     */
    isAttention: boolean;
    /**
     * タイトル
     */
    title: string;
    /**
     * 説明文
     */
    desc: string;
    /**
     * 画像
     */
    images: any;
    /**
     * 開発人数
     */
    numberOfDevelopers: number;
    /**
     * 開発期間
     */
    developmentPeriod: string;
    /**
     * 開発経緯
     */
    projectOrigin: string;
    /**
     * 使用技術
     */
    technologyUsed: works_selectTechnologys;
    /**
     * 工夫点リスト
     */
    ingenuityPoints: works_ingenuityPoint[];
    /**
     * 関連リンク
     */
    links: works_link[];
  }
>;

export interface works_ingenuityPoint {
  fieldId: "ingenuityPoint";
  /**
   * 概略
   */
  outline: string;
  /**
   * 詳細
   */
  detail: string;
}
export interface works_link {
  fieldId: "link";
  /**
   * 名前
   */
  name: string;
  /**
   * url
   */
  url: string;
  /**
   * ロゴ画像
   */
  logoImage: { url: string; width: number; height: number };
}
interface works_selectTechnologys {
  fieldId: "selectTechnologys";
  /**
   * 使用技術
   */
  technologyUsed: (
    | "Next.js"
    | "React.js"
    | "PWA"
    | "styled-components"
    | "Firebase"
    | "Express"
    | "MongoDB"
    | "Material UI"
    | "Fast API"
    | "Chat GPT AI"
    | "HTML"
    | "CSS"
    | "SCSS"
    | "JavaScript"
    | "EmailJS"
    | "Vue.js"
    | "Nuxt.js"
    | "S3"
    | "Clund9"
    | "Lambda"
    | "DynamoDB"
    | "CloudWatch"
    | "Vuetify"
    | "Prisma"
    | "Docker"
    | "Jest"
    | "StoryBook"
    | "Typescript"
    | "zod"
    | "Mantine UI"
    | "Next Auth"
    | "react-hooks-form"
    | "Recoil"
    | "Redux"
    | "Cloudinary"
    | "Node.js"
    | "PHP"
    | "Ruby"
    | "Go"
    | "Ruby on Rails"
    | "Python"
    | "Bun"
    | "Java"
    | any
  )[];
}
interface works_developmentPeriod {
  fieldId: "developmentPeriod";
  /**
   * 数値
   */
  value: number;
  /**
   * 単位
   */
  unit: string;
}
export type portfolio<T = "get"> = Structure<
  T,
  {
    /**
     * プロフィール
     */
    profile: portfolio_profile;
    /**
     * 開発実績
     */
    works: works[];
    /**
     * 保持資格
     */
    qualifications: portfolio_qualification[];
    /**
     * 保持スキル
     */
    skills: portfolio_skillsByCategory[];
    /**
     * 沿革
     */
    history?: portfolio_history[];
  }
>;

export interface portfolio_qualification {
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
export interface portfolio_skill {
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
export interface portfolio_skillsByCategory {
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
  lastName: string;
  /**
   * 名前
   */
  firstName: string;
  /**
   * 苗字（ふりがな）
   */
  lastName_furigana: string;
  /**
   * 名前（ふりがな）
   */
  firstName_furigana: string;
  /**
   * 誕生日
   */
  birthday: string;
  /**
   * プロフィール画像
   */
  profileImage: { url: string; width: number; height: number };
  /**
   * 紹介文
   */
  introduction: string;
  /**
   * 関連リンク
   */
  links: portfolio_link[];
}
interface portfolio_link {
  fieldId: "link";
  /**
   * 名前
   */
  name: string;
  /**
   * url
   */
  url: string;
  /**
   * ロゴ画像
   */
  logoImage: { url: string; width: number; height: number };
}
export interface portfolio_history {
  fieldId: "history";
  /**
   * ひにち
   */
  date: string;
  /**
   * タイトル
   */
  title: string;
  /**
   * サブタイトル
   */
  subtitle?: string;
  /**
   * 説明文
   */
  desc?: string;
  /**
   * 画像
   */
  images: any[];
  /**
   * リンク
   */
  links: portfolio_historyLink[];
}
export interface portfolio_historyLink {
  fieldId: "historyLink";
  /**
   * 名前
   */
  name: string;
  /**
   * url
   */
  url: string;
}

export interface EndPoints {
  get: {
    works: works<"get">;
    portfolio: portfolio<"get">;
  };
  gets: {
    works: works<"gets">;
    portfolio: portfolio<"gets">;
  };
  post: {
    works: works<"post">;
    portfolio: portfolio<"post">;
  };
  put: {
    works: works<"put">;
    portfolio: portfolio<"put">;
  };
  patch: {
    works: works<"patch">;
    portfolio: portfolio<"patch">;
  };
}
