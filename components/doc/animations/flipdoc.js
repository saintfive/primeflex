import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function FlipDoc(props) {
    const code = `<div class="flex flex-wrap align-items-center justify-content-center">
    <div class="flip animation-duration-1000 animation-iteration-infinite flex align-items-center justify-content-center
        font-bold bg-primary text-white border-round m-2 px-5 py-3">
        flip
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="flex flex-wrap align-items-center justify-content-center">
                    <div
                        className="flip animation-duration-1000 animation-iteration-infinite flex align-items-center justify-content-center
                        font-bold bg-primary text-white border-round m-2 px-5 py-3"
                    >
                        flip
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}