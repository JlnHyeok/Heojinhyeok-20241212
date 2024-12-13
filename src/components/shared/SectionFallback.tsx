export const SectionFallback = (sectionName: string) => {
  return (
    <div style={{ padding: "10px", color: "red" }}>
      {sectionName} 로딩 중 문제가 발생했습니다.
    </div>
  );
};
