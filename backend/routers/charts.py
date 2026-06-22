from fastapi import APIRouter
import random
import math

router = APIRouter()

GOLD = "#C9A84C"
DARK = "#3C3F4A"
MID = "#9A9A9A"
LIGHT = "#F5F5F3"

LAYOUT_BASE = {
    "paper_bgcolor": LIGHT,
    "plot_bgcolor": LIGHT,
    "font": {"family": "Inter, sans-serif", "color": DARK, "size": 11},
    "margin": {"t": 40, "r": 20, "b": 60, "l": 55},
    "xaxis": {"gridcolor": "#EEEEEE", "linecolor": "#DDDDDD"},
    "yaxis": {"gridcolor": "#EEEEEE", "linecolor": "#DDDDDD"},
    "legend": {"orientation": "h", "y": -0.25},
}


@router.get("/forecast")
def get_forecast():
    months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
              "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    actual = [42, 47, 53, 58, 61, 67, 72, 78, 81, 88, 94, 102]
    forecast = [v - random.randint(2, 6) for v in actual]

    return {
        "data": [
            {
                "x": months,
                "y": actual,
                "type": "scatter",
                "mode": "lines+markers",
                "name": "Revenue",
                "line": {"color": GOLD, "width": 2.5},
                "marker": {"color": GOLD, "size": 6},
            },
            {
                "x": months,
                "y": forecast,
                "type": "scatter",
                "mode": "lines",
                "name": "Forecast",
                "line": {"color": MID, "width": 1.5, "dash": "dot"},
            },
        ],
        "layout": {
            **LAYOUT_BASE,
            "title": {"text": "Revenue vs Forecast",
                      "font": {"color": DARK, "size": 13}},
            "yaxis": {**LAYOUT_BASE["yaxis"], "tickprefix": "£"},
        },
    }


@router.get("/segments")
def get_segments():
    def cluster(n, cx, cy, spread=0.4):
        return (
            [round(cx + random.gauss(0, spread), 2) for _ in range(n)],
            [round(cy + random.gauss(0, spread * 20), 1) for _ in range(n)],
        )

    hx, hy = cluster(10, 3.5, 72, 0.5)
    gx, gy = cluster(10, 1.2, 22, 0.3)
    ex, ey = cluster(10, 5.5, 115, 0.6)

    return {
        "data": [
            {"x": hx, "y": hy, "mode": "markers", "type": "scatter",
             "name": "High Value",
             "marker": {"color": GOLD, "size": 12, "opacity": 0.85}},
            {"x": gx, "y": gy, "mode": "markers", "type": "scatter",
             "name": "Growth",
             "marker": {"color": DARK, "size": 10, "opacity": 0.75}},
            {"x": ex, "y": ey, "mode": "markers", "type": "scatter",
             "name": "Enterprise",
             "marker": {"color": MID, "size": 14, "opacity": 0.8}},
        ],
        "layout": {
            **LAYOUT_BASE,
            "title": {"text": "Customer Segmentation",
                      "font": {"color": DARK, "size": 13}},
            "xaxis": {**LAYOUT_BASE["xaxis"], "title": "Engagement Score"},
            "yaxis": {**LAYOUT_BASE["yaxis"], "title": "Annual Spend (£k)"},
            "margin": {"t": 40, "r": 20, "b": 80, "l": 65},
        },
    }


@router.get("/feature-importance")
def get_feature_importance():
    features = [
        "Recency", "Frequency", "Spend", "Tenure",
        "Category", "Channel", "Region",
    ]
    importance = sorted(
        [round(random.uniform(0.05, 0.35), 3) for _ in features],
        reverse=True,
    )

    return {
        "data": [
            {
                "x": importance,
                "y": features,
                "type": "bar",
                "orientation": "h",
                "marker": {"color": GOLD},
                "name": "Importance",
            }
        ],
        "layout": {
            **LAYOUT_BASE,
            "title": {"text": "Feature Importance",
                      "font": {"color": DARK, "size": 13}},
            "margin": {"t": 40, "r": 30, "b": 40, "l": 100},
        },
    }
