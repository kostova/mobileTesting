package com.telerik.demoapplication;

import android.app.Activity;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.*;

public class ButtonsFragment extends Fragment {
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        return inflater.inflate(R.layout.buttons, container, false);
    }

    @Override
    public void onActivityCreated(Bundle savedInstanceState) {
        super.onActivityCreated(savedInstanceState);

        final Activity parentActivity = getActivity();
        final TextView lastButtonLabel = (TextView)parentActivity.findViewById(R.id.lastButtonTapped);
        Button button = (Button)parentActivity.findViewById(R.id.button1);
        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                lastButtonLabel.setText("Button tapped");
            }
        });

        CheckBox checkBox = (CheckBox)parentActivity.findViewById(R.id.checkBox1);
        checkBox.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                lastButtonLabel.setText("CheckBox tapped");
            }
        });

        ToggleButton toggleButton = (ToggleButton)parentActivity.findViewById(R.id.toggleButton1);
        toggleButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                lastButtonLabel.setText("ToggleButton tapped");
            }
        });

        ImageButton imageButton = (ImageButton)parentActivity.findViewById(R.id.imageButton1);
        imageButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                lastButtonLabel.setText("ImageButton tapped");
            }
        });

        QuickContactBadge contactBadge = (QuickContactBadge)parentActivity.findViewById(R.id.quickContactBadge);
        contactBadge.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                lastButtonLabel.setText("QuickContactBadge tapped");
            }
        });

        ZoomControls zoomControls = (ZoomControls)parentActivity.findViewById(R.id.zoomControls);
        zoomControls.setOnZoomInClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                lastButtonLabel.setText("Zoom in tapped");
            }
        });
        zoomControls.setOnZoomOutClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                lastButtonLabel.setText("Zoom out tapped");
            }
        });
    }
}
