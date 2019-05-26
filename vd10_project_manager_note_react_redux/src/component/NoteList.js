import React, { Component } from 'react';

class NoteList extends Component {
    render() {
        return (
            <div className="col">
                <div id="note-list" role="tablist" aria-multiselectable="true">
                    <div className="card">
                        <div className="card-header" role="tab" id="note1">
                            <h5 className="mb-0">
                                <a data-toggle="collapse" data-parent="#note-list" href="#notecontent1" aria-expanded="true" aria-controls="notecontent1">
                                    Ghi chú ngày 25/05/2019
                                 </a>
                            </h5>
                        </div>
                        <div id="notecontent1" className="collapse in" role="tabpanel" aria-labelledby="note1">
                            <div className="card-body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, aliquid architecto ducimus adipisci iure fugiat accusantium illo sunt hic deleniti cumque sit, blanditiis impedit odio, molestiae distinctio quidem qui modi.
                             </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" role="tab" id="note2">
                            <h5 className="mb-0">
                                <a data-toggle="collapse" data-parent="#note-list" href="#notecontent2" aria-expanded="true" aria-controls="notecontent2">
                                    Ghi chú ngày 25/05/2019
                                 </a>
                            </h5>
                        </div>
                        <div id="notecontent2" className="collapse in" role="tabpanel" aria-labelledby="note2">
                            <div className="card-body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, aliquid architecto ducimus adipisci iure
                                fugiat accusantium illo sunt hic deleniti cumque sit, blanditiis impedit odio, molestiae distinctio quidem
                                qui modi.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default NoteList;