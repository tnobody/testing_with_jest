import * as React from 'react'
import Prism from 'prismjs';
import 'prismjs/themes/prism.css'
import 'prismjs/themes/prism-okaidia.css'
import styled from 'styled-components';

const LineNumber = styled.span `
    text-align: right;
    margin-right: 1rem;
    color: silver;
`

const HighLight = styled.span `
    transform: scale(2);
`;

const NoHighlight = styled.span `
    opacity: .25;
`;

export class CodeSlide extends React.Component {

    constructor(props) {
        super(props);
        const {
            highlights
        } = this.props;
        this.state = {
            currentHighlight: 0,
            highlights: [
                {line: Array.from({length: this.props.code.split('\n').length}, (_, i) => i)},
                ...this.props.highlights
            ],
            loaded: false,
            showLineNumber: !!this.props.lineNumber
        }
        console.log(this.state, props.code);
    }

    changeHighlight(offset) {
        this.setState(s => { 
            const next = s.currentHighlight + offset;
            if(next < this.state.highlights.length) {
                return {
                    currentHighlight: next,
                }
            }
            if(next < 0 || next > this.state.highlights.length) {
                return {
                    currentHighlight: 0,
                }
            }
        })
    }
    componentDidCatch(error, info) {
        this.setState({ loaded: false });
    }

    prev() {
        this.changeHighlight(-1)
    }

    next() {
        this.changeHighlight(+1)
    }

    componentDidMount() {
        document.addEventListener('keydown', e => {
            if (e.keyCode === 40) {
                this.next();
            }
            if(e.keyCode === 38) {
                this.prev();
            }
        })
        const {lang} = this.props;
        import('prismjs/components/prism-' + lang).then(_ => this.setState({
            loaded: true
        }));
    }

    render() {
        if (!this.state.loaded) {
            return null;
        }
        const {
            code,
            highlights,
            lang
        } = this.props;
        const lines = Prism.highlight(code, Prism.languages[lang]).split('\n');
        const highlight = this.state.highlights[this.state.currentHighlight];
        const highlightLines = Array.isArray(highlight.line) ? highlight.line : [highlight.line]; 
        const padding = lines.length.toString().length;
        return ( <pre className={'line-numbers language-typescript'} style={{maxHeight: '90vh', overflow:'auto', maxWidth: '90vw'}}> {
                lines.map((line, i) => ( <span key={i}>
                    {this.state.showLineNumber
                        ? <LineNumber>{i.toString().padStart(padding, '0')}</LineNumber> 
                        : null
                    }
                    { highlightLines.includes(i) 
                        ? <HighLight dangerouslySetInnerHTML={{__html: line}} />
                        : <NoHighlight dangerouslySetInnerHTML={{__html: line}} />
                    } <br />
                    </span>
                ))} 
                </pre>
        )
    }
}