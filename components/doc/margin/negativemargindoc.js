import { Button } from 'primereact/button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function NegativeMarginDoc(props) {
    const code = {
        basic: `<div>
    <div class="m-3">
        <div class="-mt-5">-mt-5</div>
    </div>
    <div class="m-3">
        <div class="-mr-8">-mr-8</div>
    </div>
    <div class="m-3">
        <div class="-mb-3">-mb-3</div>
    </div>
    <div class="m-3">
        <div class="-ml-6">-ml-6</div>
    </div>
</div>
    `,
        expanded: `<div class="card">
    <div class="flex flex-wrap align-items-center justify-content-center card-container blue-container">
        <div class="bg-blue-100 w-12rem m-3 border-round">
            <div class="-mt-5 border-round-bottom bg-blue-500 text-white font-bold p-3 flex align-items-center justify-content-center">-mt-5</div>
        </div>
        <div class="bg-blue-100 w-12rem m-3 border-round">
            <div class="-mr-8 border-round-left bg-blue-500 text-white font-bold p-3 flex align-items-center justify-content-center">-mr-8</div>
        </div>
        <div class="bg-blue-100 w-12rem m-3 border-round">
            <div class="-mb-3 border-round-top bg-blue-500 text-white font-bold p-3 flex align-items-center justify-content-center">-mb-3</div>
        </div>
        <div class="bg-blue-100 w-12rem m-3 border-round">
            <div class="-ml-6 border-round-right bg-blue-500 text-white font-bold p-3 flex align-items-center justify-content-center">-ml-6</div>
        </div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Adding <i>-</i> in front of a margin class converts the value to negative.
                </p>
            </DocSectionText>
            <div className="card">
                <div className="flex flex-wrap align-items-center justify-content-center card-container blue-container">
                    <div className="bg-blue-100 w-12rem m-3 border-round">
                        <div className="-mt-5 border-round-bottom bg-blue-500 text-white font-bold p-3 flex align-items-center justify-content-center">-mt-5</div>
                    </div>
                    <div className="bg-blue-100 w-12rem m-3 border-round">
                        <div className="-mr-8 border-round-left bg-blue-500 text-white font-bold p-3 flex align-items-center justify-content-center">-mr-8</div>
                    </div>
                    <div className="bg-blue-100 w-12rem m-3 border-round">
                        <div className="-mb-3 border-round-top bg-blue-500 text-white font-bold p-3 flex align-items-center justify-content-center">-mb-3</div>
                    </div>
                    <div className="bg-blue-100 w-12rem m-3 border-round">
                        <div className="-ml-6 border-round-right bg-blue-500 text-white font-bold p-3 flex align-items-center justify-content-center">-ml-6</div>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}