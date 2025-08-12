interface Props {
  params: { id: string };
}

export default function OrgProposalsPage({ params }: Props) {
  return <div>Proposals for org {params.id}</div>;
}
